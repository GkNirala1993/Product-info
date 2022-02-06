import react from "react";
import Header from "../component/Header";
import Footer from "./Footer";

const Help = () => {
  return (
    <div className="helpdesk">
      <Header />
      <div className="container">
        <h6 className="mt-3 ">
          Flipkart Help Center | 24x7 Customer Care Support
        </h6>
        <p className="font text-muted">
          The Flipkart Help Centre page lists out various types of issues that
          you may have encountered so that there can be quick resolution and you
          can go back to shopping online. For example, you can get more
          information regarding order tracking, delivery date changes, help with
          returns (and refunds), and much more. The Flipkart Help Centre also
          lists out more information that you may need regarding Flipkart Plus,
          payment, shopping, and more. The page has various filters listed out
          on the left-hand side so that you can get your queries solved quickly,
          efficiently, and without a hassle. You can get the Flipkart Help
          Centre number or even access Flipkart Help Centre support if you need
          professional help regarding various topics. The support executive will
          ensure speedy assistance so that your shopping experience is positive
          and enjoyable. You can even inform your loved ones of the support page
          so that they can properly get their grievances addressed as well. Once
          you have all your queries addressed, you can pull out your shopping
          list and shop for all your essentials in one place. You can shop
          during festive sales to get your hands on some unbelievable deals
          online. This information is updated on 06-Feb-22
        </p>
        <div className="row">
          <div className="col-sm-3 bg-white">
            <p className="gulshan mt-2">TYPE OF ISSUE</p>
            <ul className="ul">
              <li>
                <a href="#" className="card-link" id="card-list">
                  Help with your issues
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Help with your order
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Help with other issues
                </a>
              </li>
            </ul>
            <p className="gulshan">HELP TOPICS</p>
            <ul className="ul">
              <li>
                <a href="#" className="card-link" id="card-list">
                  Flipkart Plus
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Order
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Cancellations and Returns
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Shopping
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Others
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Flipkart Quick
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  Refurbished
                </a>
              </li>
              <li>
                <a href="#" className="card-link" id="card-list">
                  SuperCoins
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-9">
            <div className="card">
              <p className="title text-muted">Help Centre</p>
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/help-centre-login_c08f8f.png"
                className="card-img-top"
                id="card-img-top"
                alt="#"
              ></img>
              <div className="card-body">
                <p className="card-text text-center">
                  Login to get help with your recent orders and issues
                </p>
                <button className="btn btn-sm" id="btn">
                  Login
                </button>
              </div>
            </div>
            <div class="card mt-3">
              <div class="card-body">
                <h5 class="card-title">What issue are you facing?</h5>
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <p class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        I want to track my order
                      </button>
                    </p>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Check order status & call the delivery agent
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        I want to manage my order
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Cancel,change delivery date & address
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        I want help with returns & refunds
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">Manage and track returns</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        I want help with other issues
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Offers,payment,Flipkart Plus & all other issues
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="title text-muted">
              Want to reach us old style ? Here is our{" "}
              <a className="link" id="postal" href="#">
                postal address
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Help;
