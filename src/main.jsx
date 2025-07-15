import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Privacy from "./pages/privacy.jsx";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
