/** @module DatabasePlugin */
import "reflect-metadata";
import fp from "fastify-plugin";
import {DataSource, Repository} from "typeorm";

import {FastifyInstance, FastifyPluginOptions} from "fastify";
import {AppDataSource} from "../db/datasources/dev_datasource";

import { OTP } from "../db/models/saved_otp";

/** This is AWESOME - we're telling typescript we're adding our own "thing" to base 'app', so we get FULL IDE/TS support */
declare module 'fastify' {

	interface FastifyInstance {
		db: DBConfigOpts
	}

	// interface FastifyRequest {
	// 	myPluginProp: string
	// }
	// interface FastifyReply {
	// 	myPluginProp: number
	// }
}

interface DBConfigOpts {
	otpDatabase: Repository<OTP>,
	connection: DataSource,
}

/**
 * Connects and decorates fastify with our Database connection
 * @function
 */
const DbPlugin = fp(async (app: FastifyInstance, options: FastifyPluginOptions, done: any) => {

	const dataSourceConnection = AppDataSource;

	await dataSourceConnection.initialize();


	// this object will be accessible from any fastify server instance
	// app.status(200).send()
	// app.db.user
	app.decorate("db", {
		otpDatabase: dataSourceConnection.getRepository(OTP)
	});

	done();
}, {
	name: "database-plugin"
});

export default DbPlugin;
