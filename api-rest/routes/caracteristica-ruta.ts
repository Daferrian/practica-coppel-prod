import { Router } from "express";
import { deleteCaracteristicas, getCaracteristicasByProducto, postCaracteristicas } from "../controllers/caracteristica-controller";


const router = Router();

router.get('/:id', getCaracteristicasByProducto);
router.post('/', postCaracteristicas);
router.delete('/:id', deleteCaracteristicas);

export default router;