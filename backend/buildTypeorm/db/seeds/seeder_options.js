/** @module SeedManager */
import { OTPSeeder } from "./otp_seeder.js";
/**
 * Options bag for configuring which seeds to run during `pnpm seed`
 */
const SeederOptions = {
    seeds: [
        OTPSeeder
    ]
};
export default SeederOptions;
//# sourceMappingURL=seeder_options.js.map