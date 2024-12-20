import { integer, text, boolean, pgTable, varchar } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const user = pgTable("user", {
    id: integer("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull(),
    dob: varchar("dob")
  });

