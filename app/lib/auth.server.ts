import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongoDB, postgresDB } from "~/database";
import { appEnv } from "./env.server";
import { sendEmail } from "./mailer.server";
import { emailTemplates } from "~/utilities/mail/templates";

export const auth = betterAuth({
  baseURL: appEnv.APP_URL,
  secret: appEnv.AUTH_SECRET,
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
        input: true   // Modify this field during registration 
      },
    },
    changeEmail: {
      enabled: true,
      sendChangeEmailVerification: async ({ user, newEmail, url, token }) => {
        const changeEmailVerificationEmail = emailTemplates.changeEmailVerificationEmail;
        await sendEmail({
          to: user.email,
          subject: changeEmailVerificationEmail.subject,
          text: changeEmailVerificationEmail.text(url),
          html: changeEmailVerificationEmail.html(url)
        })
      }
    },
    deleteUser: {
      enabled: true,
      beforeDelete: async (user) => {
        // Perform any cleanup or additional checks here
      },
      sendDeleteAccountVerification: async ({
        user,   // The user object
        url, // The auto-generated URL for deletion
        token  // The verification token  (can be used to generate custom URL)
      },
        request  // The original request object (optional)
      ) => {
        const deleteAccountVerificationEmail = emailTemplates.deleteAccountVerificationEmail
        await sendEmail({
          to: user.email,
          subject: deleteAccountVerificationEmail.subject,
          text: deleteAccountVerificationEmail.text(url),
          html: deleteAccountVerificationEmail.html(url)
        });
      },

    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    revokeSessionsOnPasswordReset: true,
    sendResetPassword: async ({ user, url }) => {
      const resetPasswordEmail = emailTemplates.resetPasswordEmail;
      await sendEmail({
        to: user.email,
        subject: resetPasswordEmail.subject,
        text: resetPasswordEmail.text(url),
        html: resetPasswordEmail.html(url),
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const accountVerificationEmail = emailTemplates.accountVerificationEmail;
      await sendEmail({
        to: user.email,
        subject: accountVerificationEmail.subject,
        text: accountVerificationEmail.text(url),
        html: accountVerificationEmail.html(url)
      })
    }
  },

  socialProviders: {
    github: {
      enabled: true,
      clientId: appEnv.GITHUB_CLIENT_ID,
      clientSecret: appEnv.GITHUB_CLIENT_SECRET,
    },
    google: {
      enabled: true,
      clientId: appEnv.GOOGLE_CLIENT_ID,
      clientSecret: appEnv.GOOGLE_CLIENT_SECRET,
    },
    // facebook: {
    //     enabled: true,
    //     clientId: appEnv.FACEBOOK_CLIENT_ID,
    //     clientSecret: appEnv.FACEBOOK_CLIENT_SECRET
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
