import { Request, Response } from "express";
import { Marca } from '../models/database';

export const getMarcas =async (req: Request, res: Response) => {
    
    const marcas = await Marca.findAll({attributes:['id_marca', 'descripcion']});

    res.status(200).json(marcas);
}