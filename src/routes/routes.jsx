import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

import NavLayout from "../components/layouts/NavLayout.jsx";
import ProtectedRoute from "../components/auth/ProtectedRoutes.jsx";
import PublicRoute from "../components/auth/PublicRoutes.jsx";

const LandingPage = lazy(() => import("../pages/landing-page/LandingPage.jsx"));

const AuthPage = lazy(() => import("../pages/auth/AuthPage.jsx"));

const routes = [
  {
    element: <PublicRoute />,
    children: [
      {
        path: "auth/:category",
        element: <AuthPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <NavLayout />,
        children: [
          {
            path: "/landing",
            element: <LandingPage />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Navigate to="/landing" />, // Catch-all route
  // },
];

export default routes;
