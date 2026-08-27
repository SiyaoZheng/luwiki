import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const wikiPages = sqliteTable("wiki_pages", {
  route: text("route").primaryKey(),
  sourcePath: text("source_path").notNull().unique(),
  title: text("title").notNull(),
  markdown: text("markdown").notNull(),
  metadataJson: text("metadata_json").notNull(),
  contentSha: text("content_sha").notNull(),
  sourceSha: text("source_sha").notNull(),
  syncedAt: text("synced_at").notNull(),
  published: integer("published", { mode: "boolean" }).notNull().default(true),
});

export const wikiSyncState = sqliteTable("wiki_sync_state", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: integer("updated_at").notNull(),
});
