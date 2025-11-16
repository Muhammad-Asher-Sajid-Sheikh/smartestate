import express from "express";
import { customerList, undoStack } from "../dataStore.js";

const router = express.Router();

// ADD CUSTOMER
router.post("/add", (req, res) => {
  const customer = req.body;

  customerList.insert(customer);

  undoStack.push({ type: "add-customer", data: customer });

  res.json({ message: "Customer added", customer });
});

// SHOW ALL
router.get("/all", (req, res) => {
  res.json(customerList.toArray());
});

export default router;
