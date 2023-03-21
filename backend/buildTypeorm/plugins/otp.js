import fp from "fastify-plugin";
import * as OTPAuth from "otpauth";
const otpPlugin = fp(async (app, options, done) => {
    let totp = new OTPAuth.TOTP({
        issuer: "PSUSec",
        label: "otpBuddy",
        algorithm: "SHA1",
        digits: 6,
        period: 15,
        secret: import.meta.env.VITE_OTP_SECRET, // or 'OTPAuth.Secret.fromBase32("NB2W45DFOIZA")'
    });
    app.decorate("otp", totp);
    done();
}, {
    name: "opt-plugin"
});
export default otpPlugin;
//# sourceMappingURL=otp.js.map