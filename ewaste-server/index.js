import express from "express";
import cors from "cors";
import dbconnect from "./Db/Dbconfig.js";
import UserRouter from "./Routes/userRouter.js";
import TicketRouter from "./Routes/ticketRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

dbconnect();

app.use("/user", UserRouter);
app.use("/ticket", TicketRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
