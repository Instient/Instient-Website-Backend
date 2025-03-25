import type { EmailConfig } from "strapi-plugin-email-designer-5/dist/server/src";

export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "example.com"),
        port: env("SMTP_PORT", "1234"),
        auth: {
          user: env("SMTP_USERNAME", "test@test.com"),
          pass: env("SMTP_PASSWORD", "test@123"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_FROM", "test@test.com"),
        defaultReplyTo: env("SMTP_REPLY_TO", "test@test.com"),
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

  upload: {
    config: {
      provider: "@strapi/provider-upload-cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
