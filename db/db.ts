import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { UserTable } from "./schema";
import postgres from "postgres";
import exp from "constants";
import "dotenv/config";

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });

export const db = drizzle(client, { schema, logger: true }); 

export async function main() {
    await db.insert(UserTable).values({ name: "abtin" });

    const user = await db.query.UserTable.findFirst()
    console.log(user)
}

main()