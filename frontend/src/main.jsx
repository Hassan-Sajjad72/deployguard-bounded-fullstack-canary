import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [message, setMessage] = useState("Connecting to the DeployGuard-managed backend…");
  useEffect(() => {
    fetch("/api/message")
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(`HTTP ${response.status}`)))
      .then((body) => setMessage(body.message))
      .catch((error) => setMessage(`Backend unavailable: ${error.message}`));
  }, []);
  return <main><p className="eyebrow">DEPLOYGUARD CANARY</p><h1>Complete application is LIVE</h1><p id="backend-message">{message}</p></main>;
}

createRoot(document.getElementById("root")).render(<App />);
