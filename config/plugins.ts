import type { EmailConfig } from "strapi-plugin-email-designer-5/dist/server/src";

module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'example.com'),
                port: env('SMTP_PORT', '1234'),
                auth: {
                    user: env('SMTP_USERNAME', 'test@test.com'),
                    pass: env('SMTP_PASSWORD', 'test@123'),
                },
            },
            settings: {
                defaultFrom: env('SMTP_FROM', 'test@test.com'),
                defaultReplyTo: env('SMTP_REPLY_TO', 'test@test.com'),
            },
        },
    },
    "email-designer-5": {
        enabled: true,
        config: {
            mergeTags: {
                company: {
                    name: "Company",
                    mergeTags: {
                        name: {
                            name: "Company Name",
                            value: "ACME Corp",
                            sample: "ACME Corp",
                        },
                    },
                },
            },
        } as EmailConfig,
    },
});