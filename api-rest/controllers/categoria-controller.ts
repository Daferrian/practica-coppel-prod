import { Request, Response } from "express";
import { Categoria } from '../models/database';

export const getCategorias =async (req: Request, res: Response) => {
    
    const categorias = await Categoria.findAll({attributes:['id_categoria', 'descripcion']});

    res.status(200).json(categorias);
}