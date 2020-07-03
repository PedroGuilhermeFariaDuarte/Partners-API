/* eslint-disable no-console */
import mongoose, { Error } from 'mongoose';

class DataBase {
    username: String | undefined;
    password: String | undefined;
    dbname: string | undefined;
    host: string | undefined;
    port: string | undefined;

    constructor() {
        this.username = process.env.DATABASE_USERNAME;
        this.password = process.env.DATABASE_PASSWORD;
        this.dbname = process.env.DATABASE_NAME;
        this.host = process.env.DATABASE_HOST;
        this.port = process.env.DATABASE_PORT;
    }

    init() {
        try {
            mongoose.connect(`mongodb://${this.host}:${this.port}`, {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                dbName: this.dbname,
            });
        } catch (error) {
            console.log(`Houve um erro ao tentar estabelecer uma conex~
            ao com o banco de dados - erro: ${error.message}`);
        }
    }

    middleware() {
        mongoose.connection.on('error', (error: Error) => {
            console.log(
                `Houve um error durante o periodo de conexão com o banco de dados - ${error.message}`
            );
        });

        mongoose.connection.on('index', (error: Error) => {
            if (error) {
                console.log(
                    `Houve um error durante o periodo de conexão com o banco de dados - ${error.message}`
                );
            }
        });
    }
}

export default new DataBase();
