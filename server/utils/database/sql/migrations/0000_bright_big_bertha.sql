CREATE TABLE `recipes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`ingredients` text NOT NULL,
	`steps` text NOT NULL,
	`image` text NOT NULL,
	`notes` text NOT NULL,
	`tags` varchar(255) NOT NULL,
	`user` varchar(88) NOT NULL,
	CONSTRAINT `recipes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `user_idx` ON `recipes` (`user`);--> statement-breakpoint
CREATE INDEX `tags_idx` ON `recipes` (`tags`);