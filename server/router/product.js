import express from "express";
import PRODUCT from "../models/product.schema.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const product = await PRODUCT.find();
    res.status(200).json(product);
  } catch {
    res.status(404).json({ message: error.message });
  }
});

export default router;
