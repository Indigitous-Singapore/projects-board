module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9635327ce9f2dbfe95fd2f21f55c34e4'),
    },
  },
  url: env('APP_URL')
});
