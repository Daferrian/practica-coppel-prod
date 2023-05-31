"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducto = exports.putProduct = exports.postProducto = exports.getProducto = exports.getProductos = void 0;
const database_1 = require("../models/database");
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield database_1.Producto.findAll({
        where: { estado: true },
        include: [
            { model: database_1.Marca, attributes: ['descripcion'] },
            { model: database_1.Categoria, attributes: ['descripcion'] }
        ]
    });
    res.status(200).json({
        productos
    });
});
exports.getProductos = getProductos;
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield database_1.Producto.findOne({ where: { id_producto: id, estado: true }, include: [
            { model: database_1.Marca, attributes: ['descripcion'] },
            { model: database_1.Categoria, attributes: ['descripcion'] },
            { model: database_1.Caracteristica }
        ] });
    res.status(200).json({
        producto
    });
});
exports.getProducto = getProducto;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const producto = yield database_1.Producto.create(body);
        res.status(201).json({ producto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.postProducto = postProducto;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const producto = yield database_1.Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }
        const bodyUpdate = {
            nombre: body.nombre,
            id_marca: body.id_marca,
            id_categoria: body.id_categoria
        };
        yield producto.update(bodyUpdate);
        res.status(200).json({
            producto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.putProduct = putProduct;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const producto = yield database_1.Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }
        yield producto.update({ estado: false });
        res.status(202).json({
            msg: 'Producto con codigo ' + id + ' a sido eliminado'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=producto-controller.js.map