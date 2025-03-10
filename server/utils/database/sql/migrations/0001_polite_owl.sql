CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(88) NOT NULL,
	`password` varchar(88) NOT NULL,
	`email` varchar(88) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `username_idx` ON `users` (`username`);--> statement-breakpoint
CREATE INDEX `email_idx` ON `users` (`email`);