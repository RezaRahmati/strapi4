const path = require('path');

module.exports = ({ env }) => {

    if (env('NODE_ENV') === 'production') {
        return {
            defaultConnection: 'default',
            connections: {
                default: {
                    connector: 'bookshelf',
                    settings: {
                        client: 'postgres',
                        host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
                        database: env('DATABASE_NAME'),
                        username: env('DATABASE_USERNAME'),
                        password: env('DATABASE_PASSWORD'),
                    },
                    options: {},
                },
            },
        }
    } else {
        return {
            connection: {
                client: 'sqlite',
                connection: {
                    filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
                },
                useNullAsDefault: true,
            }
        }
    }
};
