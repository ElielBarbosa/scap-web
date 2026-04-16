import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";

import "./assets/css/animations.css";
import "./assets/css/buttons.css";
import "./assets/css/colors.css";
import "./assets/css/icons.css";
import "./assets/css/spacings.css";
import "./assets/css/typography.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
