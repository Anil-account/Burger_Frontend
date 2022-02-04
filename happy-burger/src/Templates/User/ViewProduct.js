import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ViewProduct = () => {
  const [pdata, setpdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:90/product/get")
      .then((result) => {
        setpdata(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="container ">
        <div className="row mx-auto">
          {pdata.map((singleData) => {
            return (
              <div className="card m-md-3 col-md-4 p-0" style={{ width: " 25rem" }}>

                <div className="" style={{}}>
                <img
                  className="card-img-top position-relative"
                  src={require("../../static/images/default/burger-with-french-fries-facebook-cover.jpg")}
                  height={200}
                  width={200}
                  alt="product"
                >
                </img>
                {/* <i className="card-style">
                  <button>add to cart</button>
                </i> */}

                </div>
                <div className="card-body">
                  <a className="card-title fw-bold fs-3">Card title</a>
                  <p className="card-text text-truncate pt-2">
                  Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                <p className="card-text">Price:</p>

                <Link to="/viewdetail" className="stretched-link"></Link>
                  <button href="#" className="card-link mx-3 btn btn-primary">
                    <i className="fa fa-shopping-cart p-2 pt-0 pb-0"></i>
                    Add to cart
                  </button>
                  <button href="#" className="card-link btn btn-primary">
                    {/* <i className="fa fa-shopping-cart p-"></i> */}
                    Order now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
