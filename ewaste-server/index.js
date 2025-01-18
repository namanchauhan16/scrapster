import express from "express";
import cors from "cors";
import dbconnect from "./Db/Dbconfig.js";
import UserRouter from "./Routes/userRouter.js";
import TicketRouter from "./Routes/ticketRouter.js";
import dotenv from "dotenv";
dotenv.config();

dbconnect();
const app = express();
app.use(express.json());
const corsOptions = {
  origin: 'https://scrapster-frontend.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow required headers
};

app.use(cors(corsOptions));

// app.options('*', cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/user", UserRouter);
app.use("/ticket", TicketRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
