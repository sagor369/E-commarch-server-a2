import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./app/moduels/products/product.route";
import { OrdersRouts } from "./app/moduels/orders/order.router";
// import { UserRout } from "../modules/users/User.routs";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter )
app.use("/api/orders", OrdersRouts)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.all("*", (req:Request, res:Response)=>{
  res.status(400).json({
    success: false,
    message: "Route in not found"
  })
})

app.use((error:any, req:Request, res:Response, next:NextFunction) =>{
  if(error){

    res.status(404).json({
      success: false,
      message: error.message, 
    })
  }
})

export default app;
