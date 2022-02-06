import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="m-4">
        <div className="row">
          <div className="col-6">
            <img
              className="card-img-top position-relative image-fluid img-responsive"
              src={require("../../static/images/default/burger-with-french-fries-facebook-cover.jpg")}
              height={500}
              width={500}
              alt="product"
            ></img>
          </div>
          <div className="col-6 p-3">
            <h2>
              Product title
              <Link
                to="/customize"
                href="#"
                className="card-link float-end fs-6 text-info"
              >
                {/* <i className="fa fa-shopping-cart p-"></i> */}
                Customize Now
              </Link>
            </h2>
            <p className="fs-6">Category</p>
            <p className="pt-2 overflow-hidden">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content. Some
              quick example text to build on the card title and make up the bulk
              of the card's content. Some quick example text to build on the
              card title and make up the bulk of the card's content. Some quick
              example text to build on the card title and make up the bulk of
              the card's content. Some quick example text to build on the card
              title and make up the bulk of the card's content. Some quick
              example text to build on the card title and make up the bulk of
              the card's content. Some quick example text to build on the card
              title and make up the bulk of the card's content. Some quick
              example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <p className="fs-6 price">Price: </p>

            <Link to="/viewcart" href="#" className="card-link mx-3 btn btn-primary">
              <i className="fa fa-shopping-cart p-2 pt-0 pb-0"></i>
              Add to cart
            </Link>
            <button href="#" className="card-link btn btn-primary">
              {/* <i className="fa fa-shopping-cart p-"></i> */}
              Order now
            </button>
          </div>
        </div>

        <hr className="mt-5"></hr>
        <p>Product Review</p>
        <hr></hr>

        <div className="">
          <div className="media card p-3 ">
            <img className="align-self-start mr-3" alt=""></img>
            <div className="media-body ">
              <h6>
                Username<span className="float-end fs-6">Date</span>
              </h6>
              <p className="">Title</p>
              <p className="">Description</p>
              <button href="#" className="card-link mx-2 btn btn-primary">
                <i className="fa fa-edit p-2 px-0 pt-0 pb-0"></i>
                Edit
              </button>
              <button href="#" className="card-link btn btn-danger">
                {/* <i className="fa fa-shopping-cart p-"></i> */}
                <i className="fa fa-times p-2 px-0 pt-0 pb-0"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
        <h4 className="pt-5">You may also like</h4>
        <hr></hr>
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
            </div>
            <div className="card-body">
              <a className="card-title fw-bold fs-3">Card title</a>
              <p className="card-text text-truncate pt-2">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text">Price:</p>

              <Link to="/viewdetail" className="stretched-link"></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
