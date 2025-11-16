import express from "express";
import {
  transactionQueue,
  propertyList,
  undoStack
} from "../dataStore.js";

const router = express.Router();

router.post("/add", (req, res) => {
  const transaction = req.body;

  transactionQueue.enqueue(transaction);

  // update property status
  const prop = propertyList.find(p => p.id === transaction.propertyId);
  if (prop) {
    prop.status = transaction.type === "buy"
      ? "Available"
      : transaction.type === "sell"
      ? "Sold"
      : "Rented";
  }

  undoStack.push({ type: "add-transaction", data: transaction });

  res.json({ message: "Transaction added", transaction });
});

// SHOW QUEUE OF TRANSACTIONS
router.get("/all", (req, res) => {
  res.json(transactionQueue.toArray());
});

// UNDO LAST OPERATION
router.post("/undo", (req, res) => {
  if (undoStack.isEmpty()) return res.json({ message: "Nothing to undo" });

  const action = undoStack.pop();

  if (action.type === "add-property") {
    propertyList.delete(p => p.id === action.data.id);
    return res.json({ message: "Undo: Property removed" });
  }

  if (action.type === "add-customer") {
    customerList.delete(c => c.id === action.data.id);
    return res.json({ message: "Undo: Customer removed" });
  }

  if (action.type === "add-transaction") {
    // No dequeue undo because queue moves forward
    return res.json({ message: "Undo not possible for transaction" });
  }

  res.json({ message: "Undo complete" });
});

export default router;
