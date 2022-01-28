import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
    const userdata = {
      username,
      password,
    };
    console.log(userdata);
    axios
      .post("http://localhost:90/user/login", userdata)
      .then((result) => {
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          console.log(result.data.token);
          console.log(result.data.message);
        } else {
          console.log(result.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-page bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">Login Now</h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-6 pe-0">
                  <div className="form-left h-100 py-5 px-5 mx-xl-5 mx-md-0">
                    <form className="row g-4">
                      <div className="col-12">
                        <label>
                          Username<span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-person-fill"></i>
                          </div>
                          <input
                            type="text"
                            value={username}
                            className="form-control "
                            placeholder="Enter Username"
                            onChange={(e) => setusername(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <label>
                          Password<span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-lock-fill"></i>
                          </div>

                          <input
                            type="password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                        <div className="col-sm-12">
                          <a href="#" className="float-end text-primary">
                            Forgot Password?
                          </a>
                        </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          onClick={userLogin}
                          className="btn btn-primary px-4 m-0 float-start"
                        >
                          login
                        </button>
                      </div>
                      <div className="col-sm-12 m-2 px-0">
                          <a href="#" className="float-start text-primary underline">
                            <u>Already have an account?</u>
                          </a>
                        </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 ps-0 d-none d-md-block">
                  <div className="form-right h-100 bg-primary text-white text-center pt-5">
                    <i className="bi bi-bootstrap"></i>
                    <h2 className="fs-1">HappyBurger</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
