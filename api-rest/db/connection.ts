import { Sequelize } from "sequelize";

const db = new Sequelize('practica_coppel','postgres','coppel',{
    host: 'localhost',
    dialect: 'postgres',
    //logging: false
})

export default db
