import React, { useState } from "react";

export default function PropertyForm() {
  const [form, setForm] = useState({
    type: "",
    location: "",
    price: "",
    size: "",
    status: "Available",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/properties/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Property Added!");
  };

  return (
    <form className="form" onSubmit={submit}>
      <h2>Add Property</h2>

      <select name="type" onChange={update} required>
        <option value="">Select Type</option>
        <option>House</option>
        <option>Flat</option>
        <option>Plot</option>
        <option>Shop</option>
      </select>

      <input name="location" placeholder="Location" onChange={update} required />
      <input name="price" type="number" placeholder="Price" onChange={update} required />
      <input name="size" type="number" placeholder="Size (sqft)" onChange={update} required />

      <button>Add Property</button>
    </form>
  );
}
