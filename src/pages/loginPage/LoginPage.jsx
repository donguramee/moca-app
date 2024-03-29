import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Login from "../../components/login/Login";
import Signin from "../../components/signin/Signin";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Moca | 로그인</title>
      </Helmet>
      {/* <Login /> */}
      <Signin />
    </>
  );
};

export default LoginPage;
