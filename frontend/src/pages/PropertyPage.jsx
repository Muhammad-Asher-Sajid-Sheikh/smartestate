import React from "react";
import PropertyForm from "../components/PropertyForm";
import PropertyTable from "../components/PropertyTable";
//import UndoButton from "../components/UndoButton";

export default function PropertyPage() {
  return (
    <div className="container">
      <PropertyForm />
      <PropertyTable />
    </div>
  );
}
