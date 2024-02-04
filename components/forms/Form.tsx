"use client";
import React, { useState } from "react";
import script from "./form.module.css";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    name: "",
    parentName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleComparison = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.name.toLowerCase() === values.parentName.toLowerCase()) {
      alert(
        "Name and Parent Name should be different. Please change Föräldernamn."
      );
    } else {
      router.push("/case");
    }
  };

  return (
    <div className={script.container}>
      <form onSubmit={handleComparison}>
        <div className={script.input_container}>
          <label>FÖRNAMN: </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            required
            placeholder="e.g John"
            pattern="^[a-zA-Z]+$"
          />
        </div>
        <div className={script.input_container}>
          <label>E-POST: </label>
          <input
            type="text"
            name="email"
            required
            placeholder="e.g me@outlook.com"
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          />
        </div>
        <div className={script.input_container}>
          <label>POSTNUMMER: </label>
          <input
            type="text"
            name="post-number"
            required
            placeholder="e.g 12345 or 123 45"
            pattern="^\d{5}$|^\d{3} \d{2}$"
          />
        </div>
        <hr className={script.line} />
        <div className={script.input_container}>
          <label>FÖRNAMN PÅ FÖRÄLDER: </label>
          <input
            type="text"
            name="parentName"
            value={values.parentName}
            onChange={handleInputChange}
            required
            placeholder="not the same as Förnamn"
            pattern="^[a-zA-Z]+$"
          />
        </div>
        <div className={script.button}>
          <button type="submit">Skicka</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
