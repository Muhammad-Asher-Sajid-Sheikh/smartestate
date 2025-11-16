import express from "express";
import { propertyList, propertyBST, undoStack } from "../dataStore.js";

const router = express.Router();

// ADD PROPERTY
router.post("/add", (req, res) => {
  const property = req.body;

  propertyList.insert(property);
  propertyBST.insert(property);

  undoStack.push({ type: "add-property", data: property });

  res.json({ message: "Property added", property });
});

// VIEW ALL PROPERTIES
router.get("/all", (req, res) => {
  res.json(propertyList.toArray());
});

// VIEW SORTED BY PRICE
router.get("/sorted", (req, res) => {
  res.json(propertyBST.inorder());
});

export default router;
