import { baseTemplate } from "./base";

function Text(url: string) {
  return `
Reset your Vionex password

We received a request to reset the password for your Vionex account.

To create a new password, open the link below in your browser:

${url}

If you did not request a password reset, you can safely ignore this email. Your password will remain unchanged.

For help, contact us at vionex@gmail.com.

— Team Vionex
`;
}

function HTML(url: string) {
  return baseTemplate({
    title: "Reset your password - Vionex",
    body: `
      <!-- Heading -->
      <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: #1a1a1a; line-height: 1.3;">
        Reset Your Password
      </h1>

      <!-- Intro text -->
      <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a;">
        We received a request to reset the password for your Vionex account.
      </p>

      <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a;">
        Click the button below to create a new password.
      </p>

      <!-- CTA button -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto 30px auto;">
        <tr>
          <td style="border-radius: 6px; background-color: #4F46E5;">
            <a href="${url}" target="_blank"
               style="display: inline-block; padding: 16px 40px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px;">
              Reset Password
            </a>
          </td>
        </tr>
      </table>

      <!-- Fallback link -->
      <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.6; color: #888888; text-align: center;">
        Or copy and paste this link into your browser:
      </p>

      <p style="margin: 0 0 30px 0; font-size: 14px; line-height: 1.6; color: #4F46E5; text-align: center; word-break: break-all;">
        ${url}
      </p>

      <!-- Security notice -->
      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #888888; padding: 16px; background-color: #f9f9f9; border-left: 3px solid #4F46E5; border-radius: 4px;">
        <strong style="color: #4a4a4a; display: block; margin-bottom: 8px;">
          Security notice
        </strong>
        If you did not request a password reset, you can safely ignore this email. Your password will not be changed.
      </p>
    `,
  });
}

export const resetPasswordEmailTemplate = {
  subject: "Reset your Vionex password",
  text: Text,
  html: HTML
}