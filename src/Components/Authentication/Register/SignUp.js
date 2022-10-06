import React from "react";
import { useState, useEffect } from "react";
import db from "../../../Firebase";
import { collection, addDoc } from "firebase/firestore";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      email: email,
    });
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={createUser}>Register</button>
    </div>
  );
}

export default SignUp;
