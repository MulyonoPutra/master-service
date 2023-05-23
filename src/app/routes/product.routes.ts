import { Router } from "express";
import { create, findAll, findById, remove, update } from "../controllers/product.controller";

const router = Router();

router.get('/', findAll);
router.post('/', create);
router.get('/:id', findById);
router.delete('/:id', remove);
router.put('/:id', update);

export default router;