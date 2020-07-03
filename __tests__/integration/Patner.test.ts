import supertest from "supertest";

// App
import App from "../../src/app";

// Data
import Create_partnerData from "../data/Partner/Create";
import Search_partnerData from "../data/Partner/Search";
// import All_partnerData from "../data/partner/All";


describe('Create a Partner', async () => {
    it('Should create a new partner and receive response with status code 200', async () => {
        const response = await supertest(App).post("/partner/create").send(Create_partnerData);

        expect(response.status).toBe(200);
    })

});


describe('Search a Partner', async () => {
    it('Should search a partner with id receive in URL and receive a response with status code 200', async () => {
        const response = await supertest(App).get(`/partner/${Search_partnerData.id}`);

        expect(response.status).toBe(200);
    })

});
