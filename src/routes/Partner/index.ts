import express from 'express';

// Controller
import PatnerController from '../../App/controllers/PartnerController';

// Middlewares
import { PartnerBody, PartnerSchema, PartnerParams, Partner_DocumentExists } from "../../middlewares/PartnerValid";

const router = express.Router();

router.route('/partner/create').post(PartnerBody, PartnerSchema, Partner_DocumentExists, PatnerController.create);

router.route('/partner/:idPartner').get(PartnerParams, PatnerController.show);

router.route('/partner/').get(PartnerBody, PatnerController.index);

export default router;
