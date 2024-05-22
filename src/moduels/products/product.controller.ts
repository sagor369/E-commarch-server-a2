import { NextFunction, Request, Response } from "express";
import { ProductServices } from "./product.services";
import ProductValidation from "./product.validation";

const createProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const data = req.body;

    const productDataValidation = ProductValidation.parse(data)

    const result = await ProductServices.postProduct(productDataValidation);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

const findAllProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const {searchTerm} = req.query
    const result = await ProductServices.getProduct(searchTerm);
    if (result.length < 1) {
      res.json({
        success: false,
        message: "Products is not found",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

const findSingleProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProduct(productId);
    if (result === null) {
      res.json({
        success: false,
        message: "Products is not found",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
   next(error);
  }
};

const updateProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;
    const result = await ProductServices.putProduct(productId, quantity);
    res.json({
      success: true,
      message: "Products update successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteProduct(productId);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  createProduct,
  findAllProduct,
  findSingleProduct,
  updateProduct,
  deleteProduct,
};
