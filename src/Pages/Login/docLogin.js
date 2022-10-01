// import React, { useEffect, useState } from "react";
//  import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "firebase";
//  import { useAuthState } from "react-firebase-hooks/auth";

// export default function DocLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user] = useAuthState(auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user) navigate("/dashboard");
//   }, [user]);
//   return (<div><p>
//        hello
//     </p></div>);
// }

import React from "react";
import Header from "../../Components/Authentication/Header";
// import Login from "../../Components/Authentication/Login";
import Nav from "../../Components/NavBar/Nav";
import { Nav2 } from "../../Components/NavBar/Nav2";

export default function DocLogin() {
  return (
    <>
      <Nav />;
    </>
  );
}
