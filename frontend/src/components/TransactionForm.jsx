import React, { useEffect, useState } from "react";

export default function TransactionForm() {
  const [customers, setCustomers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({
    type: "",
    customer: "",
    property: "",
    price: "",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    async function load() {
      let c = await fetch("http://localhost:5000/api/customers/all");
      let p = await fetch("http://localhost:5000/api/properties/all");

      setCustomers(await c.json());
      setProperties(await p.json());
    }

    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/transactions/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Transaction Queued!");
  };

  return (
    <form className="form" onSubmit={submit}>
      <h2>Create Transaction</h2>

      <select name="type" onChange={update} required>
        <option value="">Select Type</option>
        <option>buy</option>
        <option>sell</option>
        <option>rent</option>
      </select>

      <select name="customer" onChange={update} required>
        <option value="">Select Customer</option>
        {customers.map((c, i) => (
          <option key={i}>{c.name}</option>
        ))}
      </select>

      <select name="property" onChange={update} required>
        <option value="">Select Property</option>
        {properties.map((p, i) => (
          <option key={i}>{p.location}</option>
        ))}
      </select>

      <input name="price" placeholder="Price" onChange={update} />

      <button>Queue Transaction</button>
    </form>
  );
}
