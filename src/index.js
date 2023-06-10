import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <ConfigProvider theme={{ token: { colorPrimary: "#FFCC00" } }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
