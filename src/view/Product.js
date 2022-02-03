import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product);
  return (
    <div className="">
      <Header />
      <h6 className="text-center my-3">All Product</h6>
    
      <div className="container">
        {
          spinner?<div className="text-center">Loading...</div>:
        
        <div className="row d-flex justify-content-center">
          {product.map((data, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-4 mb-5" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img className="mt-3" src={data.image} />
                    <div className="text-center">{data.title}</div>
                    <div className="text-center">{data.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Product;
