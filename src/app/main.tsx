import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import App from "./App.tsx";
import Overview from "./Overview.tsx";
import Media from "./Media.tsx";

/**
 * This component catches redirects from the 404.html fallback
 */
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/">
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/timeline" element={<App />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  </StrictMode>
);
