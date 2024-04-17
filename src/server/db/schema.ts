import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  timestamp,
  varchar,
  uuid,
  text,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `academix_${name}`);

export const users = createTable("users", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: text("email"),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  deletedAt: timestamp("deleted_at").default(sql`NULL`),
});
