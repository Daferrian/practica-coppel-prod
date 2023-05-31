"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marca = exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Producto = connection_1.default.define('producto', {
    id_producto: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    id_marca: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_categoria: {
        type: sequelize_1.DataTypes.INTEGER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
exports.Marca = connection_1.default.define('marca', {
    id_marca: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
exports.Producto.belongsTo(exports.Marca, { foreignKey: 'id_marca' });
exports.Marca.hasMany(exports.Producto, { foreignKey: 'id_marca' });
//# sourceMappingURL=producto.js.map