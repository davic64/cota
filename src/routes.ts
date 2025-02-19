import { createBrowserRouter } from "react-router";

import { Home, NewQuote } from "@/pages";
import Layout from "@/components/custom/layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Home,
        handle: { search: true },
      },
      {
        path: "new",
        Component: NewQuote,
        handle: { search: false, title: "Nueva Cotización" },
      },
    ],
  },
]);
