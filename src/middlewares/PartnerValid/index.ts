import { ObjectID } from "mongodb";

// Utils
import { PartnerValidaty } from '../../utils/schemas';

// Types
import { Request, Response, NextFunction } from 'express';

// Models
import PartnerModel from '../../App/models/PartnerModel';

export async function PartnerSchema(request: Request, response: Response, next: NextFunction) {

    try {
        const schemaValid = await PartnerValidaty.isValid(
            request.body
        ).catch((error) => new Error(error.message));

        if (!schemaValid) {
            response.status(400).json({
                message: 'Parece que algum campo contêm dados invalidos',
                code: 400
            });
            return;
        }

        next();
    } catch (error) {
        response.status(500).json({
            message: 'Houve um erro ao validar os dados do parceiro!',
            error: error.message,
            code: 500
        });
    }

}

export function PartnerBody(request: Request, response: Response, next: NextFunction) {
    try {

        if (!request.body?.tradingName) {
            response.status(400).json({
                message: 'Os dados do parceiro não foram enviados',
                code: 400
            });

            return;
        }
        next();

    } catch (error) {
        response.status(500).json({
            message: 'Houve um erro ao validar os dados do parceiro!',
            error: error.message,
            code: 500
        });
    }
}

export function PartnerParams(request: Request, response: Response, next: NextFunction) {
    try {
        const { idPartner } = request.params;

        if (!ObjectID.isValid(idPartner)) {
            response.status(400).json({
                message: 'Nenhum ID valido foi informado',
                code: 400
            });
            return;
        }
        next();
    } catch (error) {
        response.status(500).json({
            message: 'Houve um erro ao validar os dados do parceiro!',
            error: error.message,
            code: 500
        });
    }
}

export async function Partner_DocumentExists(request: Request, response: Response, next: NextFunction) {
    try {
        const { document } = request.body;

        const PartnerExist = await PartnerModel.findOne({
            document: { $eq: document }
        })

        if (PartnerExist) {
            response.status(400).json({
                message: `O documento ${document} já existe, tente novamente com outro documento!`,
                code: 400
            });

            return;
        }

        next();

    } catch (error) {
        response.status(500).json({
            message: 'Houve um erro ao criar um novo parceiro!',
            error: error.message,
            code: 500
        });
    }
}
