import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import PackagePage from "./pages/PackagePage.jsx";
import { MantineProvider } from "@mantine/core";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import IndividualTripPage from "./pages/IndividualTripPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/munnar",
    element: <PackagePage />,
  },
  {
    path: "/policies",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/page",
    element: <IndividualTripPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
