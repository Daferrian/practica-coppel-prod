"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const caracteristica_controller_1 = require("../controllers/caracteristica-controller");
const router = (0, express_1.Router)();
router.get('/:id', caracteristica_controller_1.getCaracteristicasByProducto);
router.post('/', caracteristica_controller_1.postCaracteristicas);
router.delete('/:id', caracteristica_controller_1.deleteCaracteristicas);
exports.default = router;
//# sourceMappingURL=caracteristica-ruta.js.map