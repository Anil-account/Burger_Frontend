import logo from "./logo.svg";
import "./App.css";
import "./static/css/footer.css"
import "./static/css/login.css"
import Navbar from "./Templates/include/Navbar"
import Footer from "./Templates/include/Footer"
import {BrowserRouter} from 'react-router-dom';
import Mid from "./Templates/Middleware/Mid";
import "./static/css/home.css"

function App() {
  return (
    <BrowserRouter>
          <Navbar></Navbar>
          <Mid></Mid>
          <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
