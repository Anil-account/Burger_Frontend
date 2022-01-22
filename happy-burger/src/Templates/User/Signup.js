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
  return (
    <div className="container mt-4 mb-4 col-md-6 shadow rounded ">
      {/* <div className="row col-12">
          <div className="col-md-6 bg-primary">
          </div>
        </div> */}
      <div className=" p-4 align-center">
        <form>
          <h3 className="pb-3">Signup</h3>
          <div className="form-group p-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group p-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
            />
          </div>{" "}
          <div className="form-group p-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
            />
          </div>{" "}
          <div className="form-group p-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
            />
          </div>{" "}
          <div className="form-group p-3">
            <label>Phone</label>
            <input
              type="Number"
              className="form-control"
              placeholder="Enter Phone number"
            />
          </div>{" "}
          <div className="form-group p-3">
            <label>New Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Password"
            />
          </div>
          <div className="form-group p-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block m-3">
            Submit
          </button>
          <p className="forgot-password text-right float-end">
            Already have an <Link to="">account?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
