"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  console.log(formData.get("fname"));
  console.log(formData.get("lname"));
}

function lettersOnly(input: string) {
  const newValue = input.replace(/[^a-zA-Z]/g, "");
  return newValue;
}

function ContactForm() {
  const [fNameValue, setFNameValue] = useState<string>("");

  return (
    <form className={styles.contactForm} onSubmit={onSubmit}>
      <div className={styles.flexColumn}>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          required
          onChange={(e) => setFNameValue(lettersOnly(e.target.value))}
          value={fNameValue}
        />
      </div>
      <div className={styles.flexColumn}>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" required />
      </div>
      <div className={styles.flexColumn}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
