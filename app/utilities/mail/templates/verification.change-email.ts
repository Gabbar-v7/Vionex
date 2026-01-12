import { baseTemplate } from "./base";

function Text(url: string) {
  return `
Verify your new email address for Vionex

We received a request to change the email address associated with your Vionex account.

To confirm this change, please verify your new email address by opening the link below:

${url}

If you did not request this change, you can safely ignore this email and your email address will remain unchanged.

For help, contact us at vionex@gmail.com.

— Team Vionex
`;
}

function HTML(url: string) {
  return baseTemplate({
    title: "Verify your new email - Vionex",
    body: `
      <!-- Heading -->
      <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: #1a1a1a; line-height: 1.3;">
        Verify Your New Email
      </h1>

      <!-- Intro text -->
      <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a;">
        We received a request to change the email address associated with your Vionex account.
      </p>

      <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a;">
        Click the button below to verify your new email address and complete the change.
      </p>

      <!-- CTA button -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto 30px auto;">
        <tr>
          <td style="border-radius: 6px; background-color: #4F46E5;">
            <a href="${url}" target="_blank"
               style="display: inline-block; padding: 16px 40px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px;">
              Verify Email
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
        If you did not request an email change, you can safely ignore this email. Your account email will remain unchanged.
      </p>
    `,
  });
}

export const changeEmailVerificationTemplate = {
  subject: "Verify your new email address - Vionex",
  text: Text,
  html: HTML
};
