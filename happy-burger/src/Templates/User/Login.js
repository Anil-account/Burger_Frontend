import axios from "axios";
import { useState } from "react";
const Login=() => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("")


    const userLogin = (e) => {
        e.preventDefault();
        const userdata = {
            username,
            password,
        } 
        axios.post("http://localhost:90/admin/login", userdata)
        .then(result =>{
            if (result.data.token) {
                localStorage.setItem("token", result.data.token);
                console.log(result.data.token)
                setmessage(result.data.message);
            }
            else{
                setmessage(result.data.message);
            }
        })       
    }
    return(
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
                          dsds
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
                              classNameName="form-control "
                              placeholder="Enter Username"
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
                              classNameName="form-control"
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
                            className="btn btn-primary px-4 float-end"
                          >
                            login
                          </button>
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
    )
}

export default Login;
