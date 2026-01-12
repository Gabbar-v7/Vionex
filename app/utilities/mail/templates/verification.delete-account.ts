import { baseTemplate } from "./base";

function Text(url: string) {
    return `
Confirm your Vionex account deletion

We received a request to permanently delete your Vionex account.

To confirm this action, please open the link below:

${url}

Once confirmed, your account and all associated data will be permanently deleted and cannot be recovered.

If you did not request this action, you can safely ignore this email and your account will remain active.

For help, contact us at vionex@gmail.com.

— Team Vionex
`;
}

function HTML(url: string) {
    return baseTemplate({
        title: "Confirm account deletion - Vionex",
        body: `
      <!-- Heading -->
      <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: #1a1a1a; line-height: 1.3;">
        Confirm Account Deletion
      </h1>

      <!-- Intro text -->
      <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a;">
        We received a request to permanently delete your Vionex account.
      </p>

      <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a;">
        This action is irreversible. Click the button below to confirm account deletion.
      </p>

      <!-- CTA button -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto 30px auto;">
        <tr>
          <td style="border-radius: 6px; background-color: #DC2626;">
            <a href="${url}" target="_blank"
               style="display: inline-block; padding: 16px 40px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px;">
              Confirm Deletion
            </a>
          </td>
        </tr>
      </table>

      <!-- Fallback link -->
      <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.6; color: #888888; text-align: center;">
        Or copy and paste this link into your browser:
      </p>

      <p style="margin: 0 0 30px 0; font-size: 14px; line-height: 1.6; color: #DC2626; text-align: center; word-break: break-all;">
        ${url}
      </p>

      <!-- Security notice -->
      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #888888; padding: 16px; background-color: #f9f9f9; border-left: 3px solid #DC2626; border-radius: 4px;">
        <strong style="color: #4a4a4a; display: block; margin-bottom: 8px;">
          Security notice
        </strong>
        If you did not request account deletion, no action is required. Your account will remain active.
      </p>
    `,
    });
}

export const deleteAccountVerificationTemplate = {
    subject: "Confirm your Vionex account deletion",
    text: Text,
    html: HTML
};
