import React from "react";
import Header from "../../Components/Authentication/Header";
import Login from "../../Components/Authentication/Login";
import Nav from "../../Components/NavBar/Nav";
import { Nav2 } from "../../Components/NavBar/Nav2";

function techLogin() {
  return (
    <div>
      <Nav />;
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

export default techLogin;
