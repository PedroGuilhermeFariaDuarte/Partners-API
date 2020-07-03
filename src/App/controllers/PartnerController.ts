// Models
import PartnerModel from '../models/PartnerModel';

// Types
import { Request, Response } from 'express'
import { Error } from "mongoose"
import PartnerType from "../../types/patner"

class Partnercontroller {
    async show(request: Request, response: Response) {
        try {
            const { idPartner } = request.params;

            const patner = await PartnerModel.findById(idPartner);

            if (!patner) {
                response.status(404).json({
                    message: 'Nenhum parceiro foi encontrado com este ID',
                    code: 404
                });
                return;
            }

            response.status(200).json({
                message: 'Parceiro encontrado com sucesso!',
                patner,
                code: 200
            });
        } catch (error) {
            response.status(500).json({
                message: 'Houve um erro ao procurar por um parceiro!',
                error: error.message,
                code: 500
            });
        }
    }

    async index(request: Request, response: Response) {
        try {
            const { coordinates } = request.body;

            const patners = await PartnerModel.aggregate(
                [
                    {
                        $geoNear: {
                            near: {
                                type: 'Point',
                                coordinates,
                            },
                            key: 'coverageArea',
                            distanceField: 'dist.distancia',
                        },
                    },
                ],
                (erro: Error, data: PartnerType) => {
                    if (erro) {
                        throw new Error(erro.message);
                    }

                    return data;
                }
            );

            if (!patners.length) {
                response.status(404).json({
                    message: 'Nenhum parceiro foi encontrado',
                    code: 404
                });
                return;
            }

            const patnerAll = patners.map((patner) => {
                const distancia = Math.round(patner.dist.distancia / 10 ** 2);

                return {
                    id: patner._id,
                    tradingName: patner.tradingName,
                    ownerName: patner.ownerName,
                    document: patner.document,
                    distance_calculeted:
                        distancia !== 0
                            ? `${distancia / 100} Km`
                            : 'Menos de 1 kilometro',
                    distance: patner.dist.distancia,
                };
            });

            response.status(200).json({
                message: 'Parceiros encontrado com sucesso!',
                patners: patnerAll,
                code: 200
            });
        } catch (error) {
            response.status(500).json({
                message: 'Houve um erro ao listar todos os parceiros!',
                error: error.message,
                code: 500
            });
        }
    }

    async create(request: Request, response: Response) {
        try {
            const newPatner = await PartnerModel.create(request.body);

            if (!newPatner) {
                response.status(500).json({
                    message: 'Não foi possivel concluir o cadastro do parceiro',
                    code: 500
                });
            }

            response.status(200).json({
                message: 'Parceiro criado com sucesso!',
                patner: newPatner,
                code: 200
            });
        } catch (error) {
            response.status(500).json({
                message: 'Houve um erro ao criar um novo parceiro!',
                error: error.message,
                code: 500
            });
        }
    }

    async delete(_request: Request, response: Response) {
        response.status(504).json({ message: 'Acesso negado!' });
    }

    async update(_request: Request, response: Response) {
        response.status(504).json({ message: 'Acesso negado!' });
    }
}

export default new Partnercontroller();
