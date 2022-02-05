import { Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import Customize from "../User/customize";
import Home from "../User/Home";
import Login from "../User/Login";
import Logout from "../User/Logout";
import Menu from "../User/Menu";
import ProductDetail from "../User/productDetail";
import Order from "../User/productOrder";
import Signup from "../User/Signup";
import ViewCart from "../User/viewCart";
import ViewProduct from "../User/ViewProduct";

class Mid extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route  path="/logout/*" element={<Logout/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/product" element={<ViewProduct/>}></Route>
          <Route path="/viewdetail" element={<ProductDetail/>}></Route>
          <Route path="/viewcart" element={<ViewCart/>}></Route>
          <Route path="/customize" element={<Customize/>}></Route>
          <Route path="/order" element={<Order/>}></Route>

        </Routes>
      </div>
    );
  }
}

export default Mid;
