// We need dotenv here because our datasources are processed from CLI in addition to vite
import dotenv from "dotenv";
import { DataSource } from 'typeorm';
// Similar reasoning as above, we need to add the file extensions to this file's imports for CLI usage
import { User } from "../models/user";
import { IPHistory } from "../models/ip_history";
import { Profile } from "../models/profile.js";

import { Initialize1676281754950 } from "../migrations/1676281754950-Initialize";

import { ProfilesMigration1676586883555 } from "../migrations/1676586883555-ProfilesMigration.js";
import { Matches1677293036162 } from "../migrations/1677293036162-Matches";
import { Matches } from "../models/matches.js";
import { Messages} from "../models/messages";
import {Messages1677556209746} from "../migrations/1677556209746-Messages";
import { OTP } from "../models/saved_otp";

dotenv.config();

// @ts-ignore 
const env = process.env;

export const AppDataSource = new DataSource({
	type: "postgres",
	host: env.VITE_DB_HOST,
	port: Number(env.VITE_DB_PORT),
	username: env.VITE_DB_USER,
	password: env.VITE_DB_PASS,
	database: env.VITE_DB_NAME,
	// entities are used to tell TypeORM which tables to create in the database
	entities: [
		OTP
	],
	migrations: [

	],
	// DANGER DANGER our convenience will nuke production data!
	synchronize: false
});
