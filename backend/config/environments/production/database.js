module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          "host": "localhost",
          "port": 5432,
          "username": "developer@indigitous.sg",
          "password": "romans8:28",
          "database": "strapi",
          "schema": "public"
        },
        options: {
          useNullAsDefault: true,
          "debug": true
        },
      },
    },
  });
  