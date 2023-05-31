import { Request, Response } from "express";
import { Caracteristica } from '../models/database';

export const getCaracteristicasByProducto =async (req: Request, res: Response) => {

    const {id} = req.params

    const caracteristicas = await Caracteristica.findAll({where:{id_producto:id}, attributes:['descripcion', 'valor']});

    res.json({
        caracteristicas
    });
    
}

export const postCaracteristicas =async (req: Request, res: Response) => {

    const body = req.body

    try {

        const caracteristica = await Caracteristica.create(body);

        res.status(201).json({caracteristica});

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
        }); 
    }

}

export const deleteCaracteristicas =async (req: Request, res: Response) => {

    const {id} = req.params

    try {

        await Caracteristica.destroy({where: {
            id_caracteristica: id
          },
          force: true
        });


        res.status(202).json({
            msg: 'Producto con codigo ' + id + ' a sido eliminado'
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
        }); 
    }
}