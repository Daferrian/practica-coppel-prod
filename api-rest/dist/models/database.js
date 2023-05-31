"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = exports.Marca = exports.Caracteristica = exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Producto = connection_1.default.define('productos', {
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
    timestamps: false,
    freezeTableName: true
});
exports.Caracteristica = connection_1.default.define('caracteristicas', {
    id_caracteristica: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    valor: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    timestamps: false,
    freezeTableName: true
});
exports.Marca = connection_1.default.define('marcas', {
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
    timestamps: false,
    freezeTableName: true
});
exports.Categoria = connection_1.default.define('categorias', {
    id_categoria: {
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
    timestamps: false,
    freezeTableName: true
});
exports.Producto.belongsTo(exports.Marca, { foreignKey: 'id_marca' });
exports.Producto.belongsTo(exports.Categoria, { foreignKey: 'id_categoria' });
exports.Producto.hasMany(exports.Caracteristica, { foreignKey: 'id_producto' });
exports.Marca.hasMany(exports.Producto, { foreignKey: 'id_marca' });
exports.Categoria.hasMany(exports.Producto, { foreignKey: 'id_categoria' });
exports.Caracteristica.belongsTo(exports.Producto, { foreignKey: 'id_producto' });
//# sourceMappingURL=database.js.map