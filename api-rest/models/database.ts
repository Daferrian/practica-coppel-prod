import { DataTypes } from 'sequelize'
import db from '../db/connection'

export const Producto = db.define('productos',{
    id_producto:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    },
    id_marca:{
        type: DataTypes.INTEGER
    },
    id_categoria:{
        type: DataTypes.INTEGER
    },
    estado:{
        type: DataTypes.BOOLEAN
    }
    
},
{
    timestamps:false,
    freezeTableName:true
});

export const Caracteristica = db.define('caracteristicas',{
    id_caracteristica:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    id_producto:{
        type: DataTypes.INTEGER
    },
    descripcion:{
        type: DataTypes.STRING
    },
    valor:{
        type: DataTypes.STRING
    },

},
{
    timestamps:false,
    freezeTableName:true
})

export const Marca = db.define('marcas',{
    id_marca:{
        primaryKey:true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    descripcion:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.BOOLEAN
    }
},
{
    timestamps:false,
    freezeTableName:true
})

export const Categoria = db.define('categorias',{
    id_categoria:{
        primaryKey:true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    descripcion:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.BOOLEAN
    }
},
{
    timestamps:false,
    freezeTableName: true
})

Producto.belongsTo(Marca, {foreignKey:'id_marca'});
Producto.belongsTo(Categoria, {foreignKey: 'id_categoria'});
Producto.hasMany(Caracteristica,{foreignKey:'id_producto'});

Marca.hasMany(Producto, {foreignKey:'id_marca'});

Categoria.hasMany(Producto,{foreignKey:'id_categoria'});

Caracteristica.belongsTo(Producto,{foreignKey:'id_producto'});
