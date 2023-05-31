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
exports.getMarcas = void 0;
const database_1 = require("../models/database");
const getMarcas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const marcas = yield database_1.Marca.findAll({ attributes: ['id_marca', 'descripcion'] });
    res.status(200).json(marcas);
});
exports.getMarcas = getMarcas;
//# sourceMappingURL=marca-controller.js.map