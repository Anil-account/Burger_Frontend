import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ height: "300vh" }}>
      <div className="background-design">
        <di className="headers-design">
          <p className="fs-3 p-0 m-0">Check Out</p>
          <h1>Our Menu</h1>
        </di>
      </div>
      <div className="mid-design">
        <p className="text-muted">Delicious Burgers</p>
        <h1 className="">Hut Burgers</h1>
      </div>
      chicken
      <div className="row">
        <div className="card m-md-3 col-md-4 p-0" style={{ width: " 25rem" }}>
          <div className="" style={{}}>
            <img
              className="card-img-top position-relative"
              src={require("../../static/images/default/burger-with-french-fries-facebook-cover.jpg")}
              height={200}
              width={200}
              alt="product"
            ></img>
            {/* <i className="card-style">
  <button>add to cart</button>
</i> */}
          </div>
          <div className="card-body">
            <a className="card-title fw-bold fs-3">Card title</a>
            <p className="card-text text-truncate pt-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className="card-text">Price:</p>

            <Link to="/viewdetail" className="stretched-link"></Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card m-md-3 col-md-4 p-0" style={{ width: " 25rem" }}>
          <div className="" style={{}}>
            <img
              className="card-img-top position-relative"
              src={require("../../static/images/default/burger-with-french-fries-facebook-cover.jpg")}
              height={200}
              width={200}
              alt="product"
            ></img>
            {/* <i className="card-style">
  <button>add to cart</button>
</i> */}
          </div>
          <div className="card-body">
            <a className="card-title fw-bold fs-3">Card title</a>
            <p className="card-text text-truncate pt-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
      </div>
      <div className="mid-design">
        <p className="text-muted">Delicious Burgers</p>
        <h1 className="">Hut Burgers</h1>
      </div>
      <div className="row">
        <div className="card m-md-3 col-md-4 p-0" style={{ width: " 25rem" }}>
          <div className="" style={{}}>
            <img
              className="card-img-top position-relative"
              src={require("../../static/images/default/burger-with-french-fries-facebook-cover.jpg")}
              height={200}
              width={200}
              alt="product"
            ></img>
            {/* <i className="card-style">
  <button>add to cart</button>
</i> */}
          </div>
          <div className="card-body">
            <a className="card-title fw-bold fs-3">Card title</a>
            <p className="card-text text-truncate pt-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
      </div>
    </div>
  );
};

export default Home;
