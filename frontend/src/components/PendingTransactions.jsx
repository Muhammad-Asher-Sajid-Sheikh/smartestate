import React, { useEffect, useState } from "react";

export default function PendingTransactions() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:5000/api/transactions/all");
      setList(await res.json());
    }
    load();
  }, []);

  return (
    <div>
      <h2>Pending Transactions</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Customer</th>
            <th>Property</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {list.map((t, i) => (
            <tr key={i}>
              <td>{t.type}</td>
              <td>{t.customer}</td>
              <td>{t.property}</td>
              <td>{t.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
