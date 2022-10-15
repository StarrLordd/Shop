import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} ></Route>
          <Route exact path="/Register" element={<Register />} ></Route>
          <Route exact path="/Product" element={<Product />} ></Route>
          <Route exact path="/Cart" element={<Cart />} ></Route>
          <Route exact path="/ProductList" element={<ProductList />} ></Route>
          <Route exact path="/" element={<Home />} ></Route>
        </Routes>
       
      </Router>
    </>
  );

};

export default App;