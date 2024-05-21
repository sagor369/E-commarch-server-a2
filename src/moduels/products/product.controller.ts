import { Request, Response } from "express";
import { ProductServices } from "./product.services";

const createProduct = async(req: Request, res: Response) => {
  const data = req.body;
  const result =await ProductServices.postProduct(data);
  res.json({
    success: true,
    message: "data create susseccfuly",
    data: result,
  });
};

const findAllProduct = async(req: Request, res: Response) =>{

    const result = await ProductServices.getProduct();
    console.log(result)
  res.json({
    success: true,
    message: "data get susseccfuly",
    data: result,
  });
}

export const ProductController = {
  createProduct,
  findAllProduct
};
