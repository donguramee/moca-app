import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
// import GlobalStyles from "./styles/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HelmetProvider>
    <GlobalStyles />
    <App />
  </HelmetProvider>
);
