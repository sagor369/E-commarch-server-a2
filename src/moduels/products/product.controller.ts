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
    console.log(error);
  }
};

const findSingleProduct = async (req: Request, res: Response) => {
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
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
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
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteProduct(productId);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
  findAllProduct,
  findSingleProduct,
  updateProduct,
  deleteProduct,
};
