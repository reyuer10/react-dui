import React from "react";

import LoginPage from "../components/LoginPage";
import { Outlet } from "react-router-dom";
import useLocalStorage from "../custom/useLocalStorage";



export default function ProtectedRoutes() {
  const { getItem } = useLocalStorage()

  const isAdminAccess = getItem("itadmin");
  const isUserAccess = getItem("user");

  return isAdminAccess || isUserAccess ? <Outlet /> : <LoginPage />;
}
