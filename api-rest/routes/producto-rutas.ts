import { Router } from "express";
import { deleteProducto, getProducto, getProductos, postProducto, putProduct } from "../controllers/producto-controller";

const router = Router();

router.get('/', getProductos);
router.get('/:id', getProducto);
router.post('/', postProducto);
router.put('/:id', putProduct);
router.delete('/:id', deleteProducto);

export default router;