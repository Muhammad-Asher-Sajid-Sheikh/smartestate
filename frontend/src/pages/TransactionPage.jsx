import React from "react";
import TransactionForm from "../components/TransactionForm";
import PendingTransactions from "../components/PendingTransactions";
import UndoButton from "../components/UndoButton";

export default function TransactionPage() {
  return (
    <div className="container">
      <TransactionForm />
      <PendingTransactions />
      <UndoButton />
    </div>
  );
}
