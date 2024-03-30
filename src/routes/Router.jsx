import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import SignupPage from "../pages/signupPage/SignupPage";
import Profile from "../pages/profilePage/Profile";
import ErrorPage from "../pages/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Error />} />
            <Route path="*" element={<Error />} /> */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="signup/profilesetup" element={<Profile />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
