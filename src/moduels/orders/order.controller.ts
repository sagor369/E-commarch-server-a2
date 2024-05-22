import { Request, Response } from "express";
import { orderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderServices.createOrder(orderData);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const gatAllorders = async (req: Request, res: Response) => {
  try {
    const {email} = req.query
    const result = await orderServices.getOrders(email);
    res.json({
      success: true,
      message: "Orders fetched successfully!",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Orders = {
  createOrder,
  gatAllorders,
};
