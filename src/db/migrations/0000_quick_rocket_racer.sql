CREATE TABLE `drivers_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text,
	`notes` text,
	`vehicleId` integer,
	FOREIGN KEY (`vehicleId`) REFERENCES `vehicles_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `modifications_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`vehicleId` integer,
	`price` text,
	`installedDate` text,
	FOREIGN KEY (`vehicleId`) REFERENCES `vehicles_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `vehicles_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nickname` text NOT NULL,
	`make` text,
	`model` text,
	`year` integer
);
