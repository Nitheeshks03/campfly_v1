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
import Privacy from "./components/Privacy.jsx";
import Refund from "./components/Refund.jsx";
import Terms from "./components/Terms.jsx";
import ContactUs from "./pages/ContactUs.jsx";

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
    path: "/",
    element: <PrivacyPolicyPage />,
    children: [
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "refund",
        element: <Refund />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <ContactUs/>
  },
  {
    path: "/page",
    element: <IndividualTripPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
