import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import SignupPage from "../pages/signupPage/SignupPage";
import Profile from "../pages/profilePage/Profile";
import ErrorPage from "../pages/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="signup/profilesetup" element={<Profile />} />
        <Route path="main" element={<MainPage />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
