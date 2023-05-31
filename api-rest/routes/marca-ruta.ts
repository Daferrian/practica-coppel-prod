import { Router } from "express";
import { getMarcas } from "../controllers/marca-controller";

const router = Router();

router.get('/', getMarcas);

export default router;