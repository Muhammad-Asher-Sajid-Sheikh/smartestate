
import React, { useState } from "react";

export default function CustomerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    cnic: "",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/customers/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Customer Added!");
  };

  return (
    <form className="form" onSubmit={submit}>
      <h2>Add Customer</h2>

      <input name="name" placeholder="Name" onChange={update} required />
      <input name="phone" placeholder="Phone" onChange={update} required />
      <input name="cnic" placeholder="CNIC" onChange={update} required />

      <button>Add Customer</button>
    </form>
  );
}
