import react from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleProduct = () => {
    history.push("/product");
  };

  const handleHome = () => {
    history.push("/")
  }

  return (
    <div className="text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container w-75 d-flex justify-content-around">
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" onClick={handleHome}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" onClick={handleProduct}>
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Help</a>
              </li>
            </ul>
          </div>

          <input
            className="form-control w-50 d-flex justify-content-end"
            type="search"
            placeholder="Search for products, brands and more"
            aria-label="Search"
          ></input>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
