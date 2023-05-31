import { Request, Response } from "express";
import { Producto, Marca, Categoria, Caracteristica } from '../models/database';



export const getProductos = async(req: Request, res: Response) =>{
    
    const productos = await Producto.findAll( 
        {
            where:{ estado:true }, 
            include:[
                {model: Marca, attributes:['descripcion']}, 
                {model: Categoria, attributes:['descripcion']}
            ]});

    res.status(200).json({
        productos
    });

}

export const getProducto = async(req: Request, res: Response)=>{

    const { id } = req.params;
    const producto = await Producto.findOne({where:{ id_producto:id, estado:true }, include:[
        {model: Marca, attributes:['descripcion']}, 
        {model: Categoria, attributes:['descripcion']}, 
        {model: Caracteristica}
    ]});

    res.status(200).json({
        producto
    });
}

export const postProducto = async (req: Request, res: Response)=>{

    const { body } = req;
    
    try {
        
        const producto = await Producto.create(body);

        res.status(201).json({producto});

    } catch (error) {
        
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }

}

export const putProduct = async(req: Request, res: Response)=>{

    const {id} = req.params;
    const {body} = req;

    try {
        
        const producto = await Producto.findByPk(id);

        if (!producto){
            return res.status(404).json({
                msg:'No existe un producto con el id ' + id
            });
        }

        const bodyUpdate = {
            nombre: body.nombre,
            id_marca: body.id_marca,
            id_categoria: body.id_categoria
        };

        await producto.update(bodyUpdate);

        res.status(200).json({
            producto
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
    

}

export const deleteProducto = async(req: Request, res: Response)=>{

    const {id} = req.params;

    try {

        const producto = await Producto.findByPk(id);

        if (!producto){
            return res.status(404).json({
                msg:'No existe un producto con el id ' + id
            });
        }

        await producto.update({estado:false})

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