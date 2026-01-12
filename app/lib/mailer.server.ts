import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { appEnv } from "./env.server";

// Create a transporter for SMTP
const transporter = nodemailer.createTransport({
    host: appEnv.SMTP_HOST,
    port: Number(appEnv.SMTP_PORT),
    secure: appEnv.SMTP_SECURE,
    auth: {
        user: appEnv.SMTP_USER,
        pass: appEnv.SMTP_PASS,
    },
});

export async function sendEmail({
    to,
    bcc,
    subject,
    text,
    html = '',
    attachments,
}: Mail.Options) {
    try {
        const info = await transporter.sendMail({
            from: `Team Vionex: <${appEnv.SMTP_USER}>`,
            to: to,
            bcc: bcc,
            subject: subject,
            text: text,
            html: html,
            attachments: attachments
        });

    } catch (err) {
        console.error("Error while sending mail", err);
    }
}