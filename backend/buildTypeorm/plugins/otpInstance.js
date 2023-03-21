import * as OTPAuth from "otpauth";
import fp from "fastify-plugin";
const OneTimePassword = fp(async (app, options, done) => {
    let totp = new OTPAuth.TOTP({
        issuer: "PSUSEC",
        label: "inviteCode",
        algorithm: "SHA1",
        digits: 6,
        period: 15,
        secret: import.meta.env.VITE_OTP_SECRET,
    });
    app.decorate("OneTimePassword", totp);
    done();
}, {
    name: "otp-plugin"
});
export default OneTimePassword;
//# sourceMappingURL=otpInstance.js.map