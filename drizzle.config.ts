import { defineConfig} from "drizzle-kit"

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./db/migrations",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
        // user: "postgres",
        // password: "abtin2002",
        // host: "localhost",
        // port: 5432,
        // database: "postgres_for_drizzle",
      },
    verbose: true,
    strict: true,
  })