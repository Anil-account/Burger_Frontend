import { Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import Login from "../User/Login";
import Signup from "../User/Signup";

class Mid extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
        </Routes>
      </div>
    );
  }
}

export default Mid;
