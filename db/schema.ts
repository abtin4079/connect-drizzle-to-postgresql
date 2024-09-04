import { pgTable ,varchar, uuid, integer, pgEnum} from "drizzle-orm/pg-core"
 
export const UserRole = pgEnum("user_role", ["admin", "basic"])

export const UserTable = pgTable("users", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
//   age: integer("age").notNull(),
//   email: varchar("email", {length: 255}).notNull().unique(),
//   userrole: UserRole("userrole").default("basic").notNull() ,
})