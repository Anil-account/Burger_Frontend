import { Link } from "react-router-dom";

const ViewCart = () => {
  return (
    <div className="card bg-light" style={{ height: "100vh" }}>
      <div className="container col-8 pt-4">
        <div className="card">
          <div class="media col-12 row card-body">
            <img
              class="align-self-start mr-3 media-image col-2"
              src={require("../../static/images/default/burger-with-french-fries-facebook-cover.jpg")}
              style={{height:"120px", width:"200px"}}
              alt="Generic placeholder image"
            ></img>
            <div class="media-body col-3">
              <h5 class="mt-0">Item name</h5>
              <p>
                Item description
              </p>
              <p className="">Price: sds
                  <br></br>
            <span className="pt-2">Quantity:</span><input type="number" className="w-25 mx-2"></input>
              </p>
            </div>
            <div className="media-body col-2 float-end">
                <button type="button" class="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
        <br className="m-2"></br>
          <button type="button" class="btn btn-success">Proceed to checkout</button>
          <Link to="/order" className="stretched-link"></Link>
      </div>
    </div>
  );
};

export default ViewCart;
