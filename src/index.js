import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Loader from "./components/Loader";
import { LangProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LangProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </LangProvider>
  </React.StrictMode>
);
