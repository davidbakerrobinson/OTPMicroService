import {FastifyInstance, FastifyPluginOptions} from "fastify";
import fp from "fastify-plugin";
import * as OTPAuth from "otpauth";
import {TOTP} from "otpauth";

declare module 'fastify' {
    interface FastifyInstance {
        otp: OTPAuth.TOTP,
    }

}

const otpPlugin = fp(async(app: FastifyInstance, options: FastifyPluginOptions, done: any)=> {
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