import React, { useEffect, useState } from "react";

export default function PropertyTable() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:5000/api/properties/all");
      const data = await res.json();
      setList(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2>All Properties</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Location</th>
            <th>Price</th>
            <th>Size</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {list.map((p, i) => (
            <tr key={i}>
              <td>{p.type}</td>
              <td>{p.location}</td>
              <td>{p.price}</td>
              <td>{p.size}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
