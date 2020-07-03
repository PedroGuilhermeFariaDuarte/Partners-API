/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const PartnerValidaty = Yup.object().shape({
    tradingName: Yup.string().required(
        'Name of your company is required'
    ),
    ownerName: Yup.string().required(
        'Your name is required'
    ),
    document: Yup.string()
        .required('Your document is required')
        .matches(/[0-9.]+[0-9.]+[0.9/]+[0.9]/),
    coverageArea: Yup.object().required('Your converage Area dont empty'),
    address: Yup.object().required('Your address dont empty'),
});
