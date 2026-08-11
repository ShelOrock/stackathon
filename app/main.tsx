import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";

import store from "./redux/store";

import theme from "./theme";

const APP = "app";

const container = document.createElement(APP);
const root = createRoot(container);

root.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </Provider>,
);
