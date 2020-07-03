import mongoose from 'mongoose';

// Utils
import CoverageArea from '../../utils/schemas/Coverage';
import Address from '../../utils/schemas/Address';

const SchemaDocument = new mongoose.Schema({
    tradingName: { type: String, required: true },
    ownerName: { type: String, required: true },
    document: { type: String, required: true },
    coverageArea: CoverageArea,
    address: Address,
});

SchemaDocument.index({ address: '2dsphere' });
SchemaDocument.index({ coverageArea: '2dsphere' });

const PartnerModel = mongoose.model('Partners', SchemaDocument);

export default PartnerModel;
