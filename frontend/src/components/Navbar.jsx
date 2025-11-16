import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="/">Dashboard</a>
      <a href="/properties">Properties</a>
      <a href="/customers">Customers</a>
      <a href="/transactions">Transactions</a>
    </div>
  );
}
