import express  from "express";
import { ProductController } from "./product.controller";


const router = express.Router() 


router.post("/", ProductController.createProduct)
router.get("/", ProductController.findAllProduct)
router.get("/:productId", ProductController.findSingleProduct)
router.put("/:productId", ProductController.updateProduct)
router.delete("/:productId", ProductController.deleteProduct)


export const productRouter = router