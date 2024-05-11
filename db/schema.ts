import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id").notNull(),
  name: text("name").notNull(),
  userId: text("text_id").notNull(),
});

export const insertAccountSchema = createInsertSchema(accounts);
