CREATE TABLE `wiki_pages` (
	`route` text PRIMARY KEY NOT NULL,
	`source_path` text NOT NULL,
	`title` text NOT NULL,
	`markdown` text NOT NULL,
	`metadata_json` text NOT NULL,
	`content_sha` text NOT NULL,
	`source_sha` text NOT NULL,
	`synced_at` text NOT NULL,
	`published` integer DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `wiki_pages_source_path_unique` ON `wiki_pages` (`source_path`);--> statement-breakpoint
CREATE TABLE `wiki_sync_state` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`updated_at` integer NOT NULL
);
