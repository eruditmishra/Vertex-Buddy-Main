import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducres/index.js";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="838750569754-rc31dvo4vd2t5mn65715tkkv4qtd0dvv.apps.googleusercontent.com">
      <BrowserRouter basename="/">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);
