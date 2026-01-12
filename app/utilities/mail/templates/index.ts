import { resetPasswordEmailTemplate } from "./reset-password";
import { accountVerificationEMailTemplate } from "./verification.account-creation";
import { changeEmailVerificationTemplate } from "./verification.change-email"
import fs from 'fs'
import { deleteAccountVerificationTemplate } from "./verification.delete-account";

export const emailTemplates = {
    accountVerificationEmail: accountVerificationEMailTemplate,
    resetPasswordEmail: resetPasswordEmailTemplate,
    changeEmailVerificationEmail: changeEmailVerificationTemplate,
    deleteAccountVerificationEmail: deleteAccountVerificationTemplate
} as const

fs.writeFile("./temp/index.html", emailTemplates.resetPasswordEmail.html("google.com"), 'utf8', (err) => console.error(err))