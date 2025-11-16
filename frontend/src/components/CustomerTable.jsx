import React, { useEffect, useState } from "react";

export default function CustomerTable() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:5000/api/customers/all");
      const data = await res.json();
      setList(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2>Customers</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>CNIC</th>
          </tr>
        </thead>

        <tbody>
          {list.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.cnic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
