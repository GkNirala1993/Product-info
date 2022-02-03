import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import { useHistory } from "react-router-dom";
import CustomModal from "../component/CustomModal";
import Footer from "./Footer";

const User = () => {
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    let token = window.localStorage.getItem("jwtToken");
    console.log(token);
    if (token) {
      console.log("yes have token");
    } else {
      console.log("no token");
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data);
        setUserList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(userList);
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="d-flex justify-content-end my-2"
          onClick={handleModalOpen}
        >
          <button className="btn btn-outline-info">Add new User</button>
        </div>
        <div className="row justify-content-center">
          {userList.map((data, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-4 mb-5" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img className="w-100 mt-3" src={data.avatar} />
                    <div className="text-center">{data.email}</div>
                    <div className="text-center">
                      {data.first_name + " " + data.last_name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {showModal ? <CustomModal handleModalClose={handleModalClose} /> : ""}
      </div>
      <Footer/>
    </div>
  );
};
export default User;
