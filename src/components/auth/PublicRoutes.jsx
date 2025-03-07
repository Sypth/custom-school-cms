import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("access_token");

  return token ? <Navigate to="/landing" replace /> : <Outlet />;
};

export default PublicRoute;