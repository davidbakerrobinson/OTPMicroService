/** @module Routes */
import * as randomstring from "randomstring";
import { OTP } from "./db/models/saved_otp.js";
/**
 * App plugin where we construct our routes
 * @param {FastifyInstance} app our main Fastify app instance
 */
export async function doggr_routes(app) {
    app.get("/generateOTP", async (request, reply) => {
        const timestamp = Date.now();
        const OTPcode = app.otp.generate({ timestamp: timestamp });
        const randomString = randomstring.generate();
        // save it to a database
        const newOTP = new OTP();
        newOTP.timestamp = String(timestamp);
        newOTP.id = randomString;
        await newOTP.save();
        return reply.send(JSON.stringify({ otp: OTPcode, randomString: randomString }));
    });
    app.post("/validateOTP", async (request, reply) => {
        //get params
        try {
            const { otp, randomString } = request.body;
            //look up entry based on randomString
            let otpEntry = await app.db.otpDatabase.findOneOrFail({
                where: {
                    id: randomString
                }
            });
            let validOTP = app.otp.validate({ token: otp, timestamp: Number(otpEntry.timestamp) });
            if (validOTP === null) {
                return reply.status(401).send("unauthorized");
            }
            else {
                return reply.status(200).send("valid");
            }
        }
        catch (err) {
            return reply.status(401).send("unauthorized");
        }
    });
}
//# sourceMappingURL=routes.js.map