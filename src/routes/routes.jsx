import { lazy } from "react";
import NavLayout from "../components/layouts/NavLayout.jsx";

// const LandingPage = lazy(() => import("../pages/landing-page/LandingPage.jsx"));
// const AcademicsPage = lazy(() => import("../pages/academics/AcademicsPage"));
// const AdmissionPage = lazy(() => import("../pages/admission/AdmissionPage"));
// const DepartmentPage = lazy(() => import("../pages/departments/DepartmentPage"));
// const ResearchPage = lazy(() => import("../pages/research/ResearchPage.jsx"))

const AuthPage = lazy(() => import("../pages/auth/AuthPage.jsx"));

const routes = [
  {
    element: <NavLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <LandingPage />,
      // },
      // {
      //   path: "/academics",
      //   element: <AcademicsPage />,
      // },
      // {
      //   path: "/admission/:category",
      //   element: <AdmissionPage />,
      // },
      // {
      //   path: "/departments/:category",
      //   element: <DepartmentPage />,
      // },
      // {
      //   path: "/research",
      //   element: <ResearchPage />,
      // },
    ],
  },
  {
    element: <AuthPage />,
    children: [
      {
        path: "/:category",
        element: <AuthPage />,
      },
    ],
  },
];

export default routes;
