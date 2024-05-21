import { Request, Response } from "express";
import { ProductServices } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await ProductServices.postProduct(data);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const findAllProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.getProduct();
  res.json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};

const findSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.getSingleProduct(productId);
  res.json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};

const updateProduct = async (req: Request, res: Response) =>{
    const { productId } = req.params;
    const {quantity} = req.body
    const result = await ProductServices.putProduct(productId, quantity);
    res.json({
      success: true,
      message: "Products update successfully!",
      data: result,
    });
}

export const ProductController = {
  createProduct,
  findAllProduct,
  findSingleProduct,
  updateProduct
};
