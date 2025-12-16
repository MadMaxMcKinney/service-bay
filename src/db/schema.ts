import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const vehiclesTable = sqliteTable("vehicles_table", {
	id: int().primaryKey({ autoIncrement: true }),
	nickname: text().notNull(),
	make: text(),
	model: text(),
	year: int(),
});

export const driversTable = sqliteTable("drivers_table", {
	id: int().primaryKey({ autoIncrement: true }),
	firstName: text().notNull(),
	lastName: text(),
	notes: text(),
	vehicleId: int().references(() => vehiclesTable.id),
});

export const modificationsTable = sqliteTable("modifications_table", {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	description: text(),
	vehicleId: int().references(() => vehiclesTable.id),
	price: text(),
	installedDate: text(),
});
