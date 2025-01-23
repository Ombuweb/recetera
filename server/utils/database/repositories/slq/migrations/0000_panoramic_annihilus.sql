CREATE TABLE `recipes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`ingredients` text,
	`steps` text,
	`image` text,
	`notes` text,
	`tags` text,
	`user` text,
	CONSTRAINT `recipes_id` PRIMARY KEY(`id`)
);
