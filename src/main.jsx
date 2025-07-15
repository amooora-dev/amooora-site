import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Privacy from "./pages/privacy.jsx";
import "./styles/index.css";
import Home from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "/privacy",
    element: (
      <App>
        <Privacy />
      </App>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
