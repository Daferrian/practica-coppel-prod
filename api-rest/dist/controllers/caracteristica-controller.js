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
exports.deleteCaracteristicas = exports.postCaracteristicas = exports.getCaracteristicasByProducto = void 0;
const database_1 = require("../models/database");
const getCaracteristicasByProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const caracteristicas = yield database_1.Caracteristica.findAll({ where: { id_producto: id }, attributes: ['descripcion', 'valor'] });
    res.json({
        caracteristicas
    });
});
exports.getCaracteristicasByProducto = getCaracteristicasByProducto;
const postCaracteristicas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const caracteristica = yield database_1.Caracteristica.create(body);
        res.status(201).json({ caracteristica });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.postCaracteristicas = postCaracteristicas;
const deleteCaracteristicas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield database_1.Caracteristica.destroy({ where: {
                id_caracteristica: id
            },
            force: true
        });
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
exports.deleteCaracteristicas = deleteCaracteristicas;
//# sourceMappingURL=caracteristica-controller.js.map