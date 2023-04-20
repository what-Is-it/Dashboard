import express from "express";
import FINANCE from "../models/finance.schema.js";

const router = express.Router();

router.get("/finances", async (req, res) => {
  try {
    const finance = await FINANCE.find();
    res.status(200).json(finance);
  } catch {
    res.status(404).json({ message: error.message });
  }
});

export default router;
