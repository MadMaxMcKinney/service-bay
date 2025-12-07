import { drizzle } from "drizzle-orm/libsql";
import { env } from "@/lib/env";

export const db = drizzle(env.DATABASE_URL);
