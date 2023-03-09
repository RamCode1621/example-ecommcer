import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Foter";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Modal from "./modal";

function App() {
  return (
    <Provider store={configureStore}>
      <div className="App">
        <Modal />
        <ShoppingCart />
        <Header />
        <ProductList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
