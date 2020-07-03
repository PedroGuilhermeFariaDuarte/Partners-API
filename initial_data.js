/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable import/first */
import { config } from 'dotenv';

// Load .env file
config();

// Database
import Database from './src/database';

// Model
import PartnerModel from './src/App/models/PartnerModel';

// List of partners
import data from './data.json';

Database.init();

// Insert to database
async function toDataBase(partnerData) {
    try {
        const partner = await PartnerModel.create(partnerData);

        if (!partner) {
            return false;
        }

        console.log(
            `partner create - ID: ${partner._id} - Name: ${partner.tradingName}`
        );
        return true;
    } catch (error) {
        console.log(
            `Houve um erro ao tentar salvar um parceiro no banco de dados - ${error} \n\n`
        );
    }
}

// Load all partner's
data.forEach(async (d) => {
    await toDataBase(d);
});
