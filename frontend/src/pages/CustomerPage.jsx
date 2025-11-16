import React from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";
import UndoButton from "../components/UndoButton";

export default function CustomerPage() {
  return (
    <div className="container">
      <CustomerForm />
      <CustomerTable />
      <UndoButton />
    </div>
  );
}
