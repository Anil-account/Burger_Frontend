import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Signup = () => {
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const userSignup = (e) => {
    e.preventDefault();
    const user = {username,firstname,lastname,address,phone,email,password,confirmpassword}
    console.log(user)
    axios.post('http://localhost:90/user/signup', user)
    .then(res => {alert(res.data.message)})

  };
  return (
    <section className="mt-5">
      <div className="container-fluid mb-4 col-md-6 shadow rounded bg-light">
      {/* <div className="row col-12">
          <div className="col-md-6 bg-primary">
          </div>
        </div> */}
      <div className=" p-4 align-center">
        <form>
          <h3 className="pb-3">Signup</h3>
          <div className="row col-12 ">
          <div className="form-group col-md-5 py-3 mx-3">
            <label>First Name</label>
            <input
              type="text"
              value={firstname}
              className="form-control"
              placeholder="Enter First Name"
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div>
          <div className="form-group col-md-5 py-3 mx-3">
            <label>Last Name</label>
            <input
              type="text"
              value={lastname}
              className="form-control"
              placeholder="Enter Last Name"
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>

          </div>
          <div className="form-group p-3">
            <label>Address</label>
            <input
              type="text"
              value={address}
              className="form-control"
              placeholder="Enter Address"
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div className="form-group p-3">
            <label>Username</label>
            <input
              type="text"
              value={username}
              className="form-control"
              placeholder="Enter Username"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>{" "}
          <div className="form-group p-3">
            <label>Email</label>
            <input
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group p-3">
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              className="form-control"
              pattern="^\d{3}-\d{3}-\d{4}$"
              onChange={(e) => setphone(e.target.value)}
              placeholder="Enter Phone number"
            />
          </div>
          <div className="form-group p-3">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Confirm Password"
            />
          </div>
          <div className="form-group p-3">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmpassword}
              className="form-control"
              onChange={(e) => setconfirmpassword(e.target.value)}
              placeholder="Enter New Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block m-3"
            onClick={userSignup}
          >
            Submit
          </button>
          <p className="forgot-password text-right float-end">
            Already have an <Link to="/login">account?</Link>
          </p>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Signup;
