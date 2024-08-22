import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/authContext.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/productsContext.jsx";
import CartProvider from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
