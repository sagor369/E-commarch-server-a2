import express  from "express";
import { ProductController } from "./product.controller";


const router = express.Router()


router.post("/", ProductController.createProduct)
router.get("/", ProductController.findAllProduct)
router.get("/:productId", ProductController.findAllProduct)
router.put("/:productId", ProductController.updateProduct)


export const productRouter = router