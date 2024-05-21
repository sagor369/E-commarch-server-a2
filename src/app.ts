import express, { Request, Response } from "express";
import cors from "cors";
// import { UserRout } from "../modules/users/User.routs";
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/api/user", UserRout )

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
