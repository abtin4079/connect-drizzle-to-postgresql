import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { UserTable } from "./schema";
import postgres from "postgres";
import exp from "constants";
import "dotenv/config";

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });

export const db = drizzle(client, { schema, logger: true }); 



// this should be in the main.ts as long as we don't have main.ts in this project 
// I write it down here for testing
export async function main() {
    await db.insert(UserTable).values({
        name: "abtin",
        age: 23,
        email: "abtin.aptitude@gmail.com",
    }).returning({
        id: UserTable.id,
    })
}

main()