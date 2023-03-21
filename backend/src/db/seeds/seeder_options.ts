/** @module SeedManager */

import {Seeder} from "../../lib/seed_manager";

import { OTPSeeder} from "./otp_seeder";

export type SeederOptionsType = {
	seeds: Array<Seeder>;
}

/**
 * Options bag for configuring which seeds to run during `pnpm seed`
 */
const SeederOptions: any = {
	seeds: [
		OTPSeeder
	]
};

export default SeederOptions;
