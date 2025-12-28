import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongoDB, postgresDB } from "~/database";
import { authSchema } from "~/database/schema";
import { appConfig } from "./env.server";

export const auth = betterAuth({
    baseURL: appConfig.APP_URL,
    secret: appConfig.AUTH_SECRET,
    database: mongodbAdapter(mongoDB),

    /**
     * Pass the drizzle adapter as follows:
     * drizzleAdapter(postgresDB, {
     *  provider: "pg", // or "mysql", "sqlite"
     *  schema: authSchema
     * }),
     */

    user: {
        additionalFields: {
            role: {
                type: "number",
                required: true,
                defaultValue: 0,
                input: false        // user cannot set on signup
            },
        },
        changeEmail: {
            enabled: true,
            // sendChangeEmailVerification: async ({ user, newEmail, url, token }) => {
            //     await sendEmail({
            //         to: user.email, // verification email must be sent to the current user email to approve the change
            //         subject: 'Approve email change',
            //         text: "",
            //         html: getChangeEmailVerificationMail(url, newEmail)
            //     })
            // }
        },
        deleteUser: {
            enabled: true,
            beforeDelete: async (user) => {
                // Perform any cleanup or additional checks here
            },
            // sendDeleteAccountVerification: async (
            //     {
            //         user,   // The user object
            //         url, // The auto-generated URL for deletion
            //         token  // The verification token  (can be used to generate custom URL)
            //     },
            //     request  // The original request object (optional)
            // ) => {

            //     await sendEmail({ to: user.email, subject: "Verify Deletion", text: "", html: getDeleteVerificationMail(url) });
            // },

        },
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
        revokeSessionsOnPasswordReset: true,
        // sendResetPassword: async ({ user, url }) => {
        //     await sendEmail({
        //         to: user.email,
        //         subject: "Reset your password",
        //         text: "",
        //         html: getResetPasswordMail(url),
        //     });
        // },
    },
    emailVerification: {
        sendOnSignUp: true,
        // sendVerificationEmail: async ({ user, url, token }, request) => {
        //     await sendEmail({
        //         to: user.email,
        //         subject: 'Verify your email address',
        //         text: "",
        //         html: getVerificationMail(url)
        //     })
        // }
    },

    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24 * 2 // 2 day (every 2 day the session expiration is updated)
    },
    advanced: {
        cookiePrefix: "vionex",
        cookies: {
            session_token: {
                name: "session_token",
                attributes: {
                    // Set custom cookie attributes
                }
            },
        }
    }
});