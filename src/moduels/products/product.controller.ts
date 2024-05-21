import { Request, Response } from "express";
import { ProductServices } from "./product.services";


const createProduct = (req: Request, res:Response) =>{
    const data = req.body
    const result = ProductServices.postProduct(data) 
    res.json(
        {
            success: true ,
            message: "data create susseccfuly",
            data: result
        }
    )


}


export const ProductController =  {
    createProduct
}