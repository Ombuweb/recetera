DROP INDEX `user_idx` ON `recipes`;--> statement-breakpoint
ALTER TABLE `recipes` ADD `user_id` int NOT NULL;--> statement-breakpoint
CREATE INDEX `user_idx` ON `recipes` (`user_id`);--> statement-breakpoint
ALTER TABLE `recipes` DROP COLUMN `user`;