import { baseTemplate } from "./base";

function Text(url: string) {
    return `
Verify your email address - Vionex

Thanks for signing up with Vionex.
To complete your registration, please verify your email address by opening the link below in your browser:
${url}

If you did not create an account with Vionex, you can safely ignore this email.

For help, contact us at vionex@gmail.com.
— Team Vionex
`;
}

function HTML(url: string) {
    return baseTemplate({
        title: "Verify your email - Vionex",
        body: `
            <!-- Greeting -->
            <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: #1a1a1a; line-height: 1.3;" class="dark-mode-text">
                Verify Your Email Address
            </h1>
            
            <!-- Body text -->
            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a;" class="dark-mode-secondary-text">
                Thanks for signing up with Vionex! To get started, please verify your email address by clicking the button below.
            </p>
            
            <!-- Call-to-action button -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto 30px auto;">
                <tr>
                    <td style="border-radius: 6px; background-color: #4F46E5;">
                        <a href="${url}" target="_blank" style="display: inline-block; padding: 16px 40px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px;">
                            Verify Email Address
                        </a>
                    </td>
                </tr>
            </table>
            
            <!-- Alternative link -->
            <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #888888; text-align: center;" class="dark-mode-secondary-text">
                Or copy and paste this link into your browser:
            </p>
            
            <p style="margin: 0 0 30px 0; font-size: 14px; line-height: 1.6; color: #4F46E5; text-align: center; word-break: break-all;">
                ${url}
            </p>
            
            <!-- Security notice -->
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #888888; padding: 16px; background-color: #f9f9f9; border-left: 3px solid #4F46E5; border-radius: 4px;" class="dark-mode-secondary-text">
                <strong style="color: #4a4a4a; display: block; margin-bottom: 8px;">Security Notice:</strong>
                If you didn't create an account with Vionex, you can safely ignore this email.
            </p>
    `,
    });
}

export const accountVerificationEMailTemplate = {
    subject: "Reset your password - Vionex",
    text: Text,
    html: HTML,
}