import React from "react";

import LoginPage from "../components/LoginPage";
import { Outlet } from "react-router-dom";
import useLocalStorage from "../custom/useLocalStorage";
import SelectView from "./view/SelectView";



export default function ProtectedRoutes() {
  const { getItem } = useLocalStorage();
  

  const isAdminAccess = getItem("itadmin");
  const isUserAccess = getItem("user");
  const storedTable = getItem("table")

  return isAdminAccess || isUserAccess ? <Outlet /> : <LoginPage />;
}
