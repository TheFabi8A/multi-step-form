import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import FormContextProvider from "./context/FormContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
