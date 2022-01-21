import { Component } from "react/cjs/react.production.min";
import {Link} from 'react-router-dom';
  
class Navbar extends Component {
  render() {
    return (
      <div className="border-bottom">
        <ul class="nav">
          <li class="nav-item m-4">
            <Link to="/home">Home</Link>
          </li>

          <li class="nav-item m-4">
          <Link to="/login">Login</Link>
          </li>

          <li class="nav-item m-4">
          <Link to="/register">Register</Link>
          </li>

          <li class="nav-item m-4">
          <Link to="/product">Product</Link>
          </li>

        </ul>
      </div>
    );
  }
}

export default Navbar;
