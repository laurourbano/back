import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";
import "./database/connection";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(process.env.PORT || "3331", () => {
  console.log(`Server is running on port ${process.env.PORT || "3331"}`);
});
