module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'development'){
    return {
      defaultConnection: 'default',
      connections: {
        default: {
            connector: 'bookshelf',
            settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
            },
            options: {
            useNullAsDefault: true,
            },
        },
      },
    }
  } else {
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
            username: env('DATABASE_USERNAME', 'developer@indigitous.sg'),
            password: env('DATABASE_PASSWORD', 'Romans8:28'),
          },
          options: {
            ssl: false,
          },
        },
      },
    }
  }
};