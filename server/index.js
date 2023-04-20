import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import financeRouter from "./router/finance.js";
import productRouter from "./router/product.js";
import PRODUCT from "./models/product.schema.js";
import FINANCE from "./models/finance.schema.js";
import { financeData, products } from "./data/data.js";

// conf
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const PORT = process.env.PORT || 9000;

// mongoose
const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const HOSTNAME = process.env.MONGO_HOSTNAME;
const DB_PORT = process.env.MONGO_PORT;
const DB_NAME = process.env.MONGO_DB;
const url = `mongodb://${USERNAME}:${PASSWORD}@${HOSTNAME}:${DB_PORT}/${DB_NAME}?authSource=admin`;

// routes
app.use("/finance", financeRouter);
app.use("/product", productRouter);

mongoose
  .connect(url, {
    useNewUrlPArser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    // ADD DATA ONE TIME OR AS NEEDED
    // FINANCE.insertMany(financeData);
    // PRODUCT.insertMany(products);
  })
  .catch((err) => console.log(`${err} did not connect`));
