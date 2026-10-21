import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./App";
import { routes } from "./seo";
import "./styles/index.css";

const container = document.getElementById("root");

if (container) {
  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
  // Hosts that fall back to the home page's HTML for unknown paths would otherwise cause a hydration mismatch.
  const here = window.location.pathname.replace(/\/+$/, "") || "/";
  const rendered = container.dataset.path;
  const prerenderedHere = rendered === here || (rendered === "*" && !routes.some((r) => r.path === here));
  if (container.firstElementChild && prerenderedHere) hydrateRoot(container, app);
  else createRoot(container).render(app);
}
