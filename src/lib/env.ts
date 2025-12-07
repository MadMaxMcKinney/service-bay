import { config } from "dotenv";
import { z } from "zod";

// Load .env file
config();

const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	DATABASE_URL: z.string().default("file:./prod.db"),
});

// Parse and validate environment variables
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error(
		"❌ Invalid environment variables:",
		z.treeifyError(parsedEnv.error),
	);
	throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
