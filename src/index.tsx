import { ChakraProvider } from "@chakra-ui/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <Provider store={store}>
      <HashRouter>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </HashRouter>
    </Provider>
  </ChakraProvider>
);
