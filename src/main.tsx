import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <>
     <ToastContainer position="bottom-right" autoClose={3000} />
    <App />
  </>,
);
