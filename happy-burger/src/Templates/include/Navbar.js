import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="border-bottom">
        <ul className="nav">
          <li className="nav-item m-4">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item m-4">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item m-4">
            <Link to="/register">Register</Link>
          </li>
          <li className="nav-item m-4">
            <Link to="/product">Product</Link>
          </li>

          <li className="nav-item m-4">
            <Link to="/logout">Logout</Link>
          </li>

          <li className="nav-item m-4">
            <Link to="/menu">Menu</Link>
          </li>

          <li className="nav-item dropdown m-2">
          <a className="nav-link dropdown-toggle m-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Chicken</a></li>
            <li><a className="dropdown-item" href="#">Beef</a></li>
            <li><a className="dropdown-item" href="#">Fish</a></li>
          </ul>
        </li>

          <li className="nav-item m-4 float-left" >
            <div className="shopping-cart">
              <span className="fa fa-shopping-cart "></span>
            <Link to="/viewcart" className="stretched-link cart-font">
              <i className="fa fa-circle circle-cart"><span className="text-dark cart-text">3</span></i>
            </Link>
            </div>

          </li>
          <li className="nav-item m-4">
            <Link to="/">Profile</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
