import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TitleBar from "@/components/custom/TitleBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TitleBar />
    <App />
  </StrictMode>
);
