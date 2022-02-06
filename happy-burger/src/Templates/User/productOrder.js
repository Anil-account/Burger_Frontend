import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="card bg-light order-center " style={{ height: "100vh" }}>
      <div className="pt-4" >
        {/* delivery address */}
        <div className="col-12 position-relative" style={{ left: "30%", top: "10%"}} >
          <div className="card col-4  ">
            <p className="fs-3">Delivery Address</p>
            <div class="media-body ">
              <form className="p-4 ">
                <div class="form-group row pb-4">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">
                    Country
                  </label>
                  <div class="col-sm-7">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div class="form-group row pb-4">
                  <label for="inputPassword3" class="col-sm-3 col-form-label">
                    City
                  </label>
                  <div class="col-sm-7">
                    <input
                      type="number"
                      class="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>{" "}
                <div class="form-group row pb-4">
                  <label for="inputPassword3" class="col-sm-3 col-form-label">
                    Address
                  </label>
                  <div class="col-sm-7">
                    <textarea
                      type="text"
                      rows="4" cols="50"
                      class="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    ></textarea>
                  </div>
                </div>{" "}
                <div class="form-group row pb-4">
                  <label for="inputPassword3" class="col-sm-3 col-form-label">
                    Phone
                  </label>
                  <div class="col-sm-7">
                    <input
                      type="number"
                      class="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>{" "}
                <div class="form-group row pb-4">
                  <label for="inputPassword3" class="col-sm-3 col-form-label">
                    Payment Method
                  </label>
                  <div class="col-sm-7">
                    <input
                      type="number"
                      class="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>{" "}
              </form>
            </div>
            <div className="btn btn-primary">Order Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
