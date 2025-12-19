
import dotenv from "dotenv";
dotenv.config({ path: "./Config/config.env" });

import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";

const app = express();

/* ✅ CORS MUST COME FIRST */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

/* ✅ Body parsers */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ DB */
dbConnection();

/* ✅ Routes */
app.use("/api/v1/message", messageRouter);

/* ✅ Test route */
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

export default app;
