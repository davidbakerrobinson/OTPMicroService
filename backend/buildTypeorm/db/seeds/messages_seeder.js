/** @module Seeds/Profile */
import { faker } from "@faker-js/faker";
import { Seeder } from "../../lib/seed_manager.js";
import { Profile } from "../models/profile.js";
import { Messages } from "../models/messages.js";
// note here that using faker makes testing a bit...hard
// We can set a particular seed for faker, then use it later in our testing!
faker.seed(100);
/**
 * Seeds the message history of the table
 */
export class Messages_seeder extends Seeder {
    /**
     * Runs the Messages table's seed
     * @function
     * @param {FastifyInstance} app
     * @returns {Promise<void>}
     */
    async run(app) {
        app.log.info("Seeding Messages...");
        // Remove everything in there currently
        await app.db.matches.delete({});
        // get our users and make each a few IPs
        const profiles = await Profile.find();
        for (let i = 0; i < profiles.length; i++) {
            let newMessage = new Messages();
            let newMessage2 = new Messages();
            let j = (i + 5) % (profiles.length - 1);
            newMessage.messageSender = profiles[i];
            newMessage.messageReceiver = profiles[j];
            newMessage.message = "Hello Mater, " + i;
            await newMessage.save();
            let l = (i + 2) % (profiles.length - 1);
            newMessage2.messageSender = profiles[l];
            newMessage2.messageReceiver = profiles[i];
            newMessage2.message = "hey-ho, jojo" + l;
            await newMessage2.save();
            app.log.info("Finished seeding messages: " + profiles[i]);
        }
    }
}
export const MessageSeed = new Messages_seeder();
//# sourceMappingURL=messages_seeder.js.map