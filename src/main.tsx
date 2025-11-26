import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import Categories from "./pages/Categories.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/garden-shop",
//     element: <App />,
//   },
//   {
//     path: "/garden-shop/categories",
//     element: <Categories />,
//   },
// ]);

// createRoot(document.getElementById("root")!).render(
//   <RouterProvider router={router} />
// );

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
