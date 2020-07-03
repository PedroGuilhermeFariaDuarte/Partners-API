import express from 'express';

// Controller
import PatnerController from '../../App/controllers/PartnerController';

const router = express.Router();

router.route('/partner/create').post(PatnerController.create);

router.route('/partner/:idPartner').get(PatnerController.show);

router.route('/partner/').get(PatnerController.index);

export default router;
