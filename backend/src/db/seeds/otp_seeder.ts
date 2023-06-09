
import { OTP } from "../models/saved_otp";
import {Seeder} from "../../lib/seed_manager";
import {FastifyInstance} from "fastify";
import * as randomstring from "randomstring";

/**
 * UserSeeder class - Model class for interacting with "users" table
 */
export class otpSeeder extends Seeder {
	/**
     * Runs the IPHistory table's seed
     * @function
     * @param {FastifyInstance} app
     * @returns {Promise<void>}
     */
	override async run(app: FastifyInstance) {
		app.log.info("Seeding otp...");
		// clear out whatever's already there
		// note we cannot use .clear() because postgres cascade is bugged in Typeorm
		// https://github.com/typeorm/typeorm/issues/1649
		console.log(app.db.otpDatabase + "is the otpDatabase");
		await app.db.otpDatabase.delete({});

		for (let i = 0; i < 10; i++) {
			let randString = randomstring.generate();
			let otpCode = app.otp.generate();
			let otp = new OTP();
			otp.id = randString;
			otp.validated = false;
			await otp.save();
			app.log.info("Seeded otpCode " + i);
		}
	}
}

// generate default instance for convenience
export const OTPSeeder = new otpSeeder();