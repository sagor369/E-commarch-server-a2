import express  from "express";
import { ProductController } from "./product.controller";


const router = express.Router()


router.post("/", ProductController.createProduct)
router.get("/", ProductController.findAllProduct)

export const productRouter = router