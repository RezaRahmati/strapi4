const path = require('path');

module.exports = ({ env }) => {
    if (env('NODE_ENV') === 'production') {
        return {
            connection: {
                client: 'postgres',
                connection: {
                    host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
                    database: env('DATABASE_NAME'),
                    user: env('DATABASE_USERNAME'),
                    password: env('DATABASE_PASSWORD'),
                }
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
