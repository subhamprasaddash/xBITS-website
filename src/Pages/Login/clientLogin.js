import React from "react";
import Header from "../../Components/Authentication/Header";
import Login from "../../Components/Authentication/Login";
import Nav from "../../Components/NavBar/Nav";

export default function ClientLogin() {
  return (
    <div>
      <Nav />
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  );
}
