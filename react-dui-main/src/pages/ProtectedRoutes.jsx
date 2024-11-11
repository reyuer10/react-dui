import React from "react";

import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import { Outlet } from "react-router-dom";



export default function ProtectedRoutes() {

  const isLoggedIn = localStorage.getItem("itadmin");

  return !isLoggedIn ? <LoginPage /> : <Outlet />;
}
