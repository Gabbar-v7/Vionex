import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
    APP_URL: z.url(),
    LOGGER_LEVEL: z.string(),
    SERVICE_NAME: z.string(),

    POSTGRES_URL: z.url(),
    MONGODB_URL: z.url(),

    AUTH_SECRET: z.string(),

    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),

    RAZORPAY_KEY: z.string(),
    RAZORPAY_SECRET: z.string(),

    SMTP_HOST: z.hostname(),
    SMTP_PORT: z.coerce.number(),
    SMTP_SECURE: z.coerce.boolean(),
    SMTP_USER: z.string(),
    SMTP_PASS: z.string(),
})

export const appEnv = envSchema.parse(process.env)