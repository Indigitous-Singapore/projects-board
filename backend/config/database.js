module.exports = ({ env }) => {
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DATABASE_HOST', '0.0.0.0'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'postgres'),
          username: env('DATABASE_USERNAME', 'indigitous'),
          password: env('DATABASE_PASSWORD', 'secret'),
          ssl: env.bool('DATABASE_SSL', true),
        },
        options: {},
      },
    }
  }
};