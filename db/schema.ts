import { timeStamp } from "console";
import { pgTable ,varchar, uuid, integer, pgEnum, real, boolean, timestamp, PrimaryKey, primaryKey} from "drizzle-orm/pg-core"
 
export const UserRole = pgEnum("user_role", ["admin", "basic"])

export const UserTable = pgTable("users", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  age: integer("age").notNull(),
  email: varchar("email", {length: 255}).notNull().unique(),
  userrole: UserRole("userrole").default("basic").notNull() ,
})


// one-to-one relationship

export const UserRefrenceTable = pgTable("userPreferences", {
  id: uuid("id").primaryKey().defaultRandom(),
  emailUpdates: boolean("emailUpdates").notNull().default(false),
  userId: uuid("userId").references(() => UserTable.id).notNull(),
});

// on-to-many relationship

export const PostTable = pgTable("post", {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar("title").notNull(),
  averageRating: real('averageRating').notNull().default(0),
  creatAt: timestamp("creatAt").notNull().defaultNow(),
  updateAt: timestamp("updateAt").notNull().defaultNow(),
  authorId: uuid('authorId').references(() => UserTable.id).notNull(),
})

// many-to-many relationship

export const CategoryTable = pgTable("category", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
})

export const PostCategoryTable = pgTable("postCategory", {
  postId: uuid('postId').references(() => PostTable.id),
  categoryId: uuid("categoryId").references(() => CategoryTable.id),

}, table => {
  return {
    pk: primaryKey({ columns: [table.postId, table.categoryId]})
  }
})