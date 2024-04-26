import React from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const domElementId = "root";

// Render the app
const rootElement = document.getElementById(domElementId);
if (!rootElement) {
  throw new Error(`Element with id ${domElementId} not found`);
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
