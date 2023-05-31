import express, { Application } from 'express';
import * as productoRuta from '../routes/producto-rutas';
import * as caracteristicaRuta from "../routes/caracteristica-ruta";
import * as marcaRuta from "../routes/marca-ruta";
import * as categoriaRuta from "../routes/categoria-ruta";
import cors from 'cors'
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiRutas = {
        caracteristica:'/api/caracteristicas',
        categorias:'/api/categorias',
        marcas:'/api/marcas',
        producto: '/api/productos',
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT  || '8000';

        this.dbConnection();
        this.middlewares();
        this.rutas();
    }

    async dbConnection(){
        try {

            await db.authenticate();
            console.log('Database online');
            
        } catch (error) {
            
        }
    }

    middlewares(){
        
        this.app.use(cors({}));

        this.app.use(express.json());

    }

    rutas(){
        this.app.use(this.apiRutas.producto, productoRuta.default);
        this.app.use(this.apiRutas.caracteristica, caracteristicaRuta.default);
        this.app.use(this.apiRutas.marcas, marcaRuta.default);
        this.app.use(this.apiRutas.categorias, categoriaRuta.default)
    }

    listen() {
        this.app.listen(this.port,()=>{
            console.log('Server corriendo en el puerto: ' + this.port);
        })
    }
}

export default Server;