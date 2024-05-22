import express, { Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./moduels/products/product.route";
import { OrdersRouts } from "./moduels/orders/order.router";
// import { UserRout } from "../modules/users/User.routs";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter )
app.use("/api/orders", OrdersRouts)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
