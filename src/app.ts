/* eslint-disable import/first */
import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

// Routes
import { Express } from 'express-serve-static-core';
import Partner from './routes/Partner';

// Database
import Database from './database';

class App {
    server: Express;

    constructor() {
        this.server = express();
        this.init();
    }

    init() {
        this.middleware();
        this.routes();
        this.database();
    }

    routes() {
        this.server.use([Partner]);
    }

    middleware() {
        this.server.use(
            cors({
                origin: ['http://localhost:3000', 'http://localhost'],
            })
        );
        this.server.use(json());
    }

    database() {
        Database.init();
        Database.middleware();
    }
}

export default new App().server;
