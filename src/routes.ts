import { createBrowserRouter } from "react-router";

import { Home } from "@/pages";
import Layout from "@/components/custom/layout";

export const routes = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
        handle: { search: true },
      },
    ],
  },
]);
