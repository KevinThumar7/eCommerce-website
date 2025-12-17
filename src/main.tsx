import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import "../i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.Suspense
      fallback={
        <div className="flex justify-center items-center h-screen mt-[-50px]">
          <div className="w-12 h-12 border-4 border-black-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.Suspense>
  </StrictMode>
);
