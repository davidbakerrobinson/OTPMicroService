// We need dotenv here because our datasources are processed from CLI in addition to vite
import dotenv from "dotenv";
import { DataSource } from 'typeorm';
// Similar reasoning as above, we need to add the file extensions to this file's imports for CLI usage
import { Initialize1679385394309 } from "../migrations/1679385394309-Initialize.js";
import { modifyOTP1679425438702 } from "../migrations/1679425438702-modifyOTP.js";
import { OTP } from "../models/saved_otp.js";
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
        Initialize1679385394309,
        modifyOTP1679425438702
    ],
    // DANGER DANGER our convenience will nuke production data!
    synchronize: false
});
//# sourceMappingURL=dev_datasource.js.map