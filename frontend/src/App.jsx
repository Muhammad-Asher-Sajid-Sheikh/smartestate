import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import PropertyPage from "./pages/PropertyPage";
import CustomerPage from "./pages/CustomerPage";
import TransactionPage from "./pages/TransactionPage";

export default function App() {
  const path = window.location.pathname;

  let Page =
    path === "/properties" ? PropertyPage :
    path === "/customers" ? CustomerPage :
    path === "/transactions" ? TransactionPage :
    DashboardPage;

  return (
    <>
      <Navbar />
      <Page />
    </>
  );
}
