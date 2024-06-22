import React from "react";

import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import { data } from "../data/data";

export default function ProtectedRoutes() {
  return data.loggedIn ? <LoginPage /> : <HomePage />;
}
