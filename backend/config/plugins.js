module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: env('MAIL_FROM'),
      defaultReplyTo: env('MAIL_REPLY_TO') || env('MAIL_FROM'),
    },
  },
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      endpoint: env('AWS_ENDPOINT'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
    },
  },
})