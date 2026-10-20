import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./app/App";

import store from "./redux/store";

import theme from "./theme/index";

const APP_ID = "app";

const container = document.getElementById(APP_ID);

if(!container) {
  throw new Error(`Could not find container with id ${ APP_ID }`);
}

const root = createRoot(container);

root.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </Provider>
);
