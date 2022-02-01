import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
 
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };
  const handleRegister = () => {
    if (Email !== "" && Password !== "") {
      history.push("/");
    }
  };
  const handleHome = () => {
    history.push("/");
  };
  return (
    <div className="card bg-primary mx-auto w-50 mt-5">
      <div className="card-body">
        <h3 className="text-center ">Register</h3>
       
        <input className="form-control my-3" placeholder="Enter your email" />
        <input
          type="password"
          className="form-control my-3"
          placeholder="Enter your password"
        />

        <div className="text-center d-flex justify-content-between">
          <button className="btn btn-dark mx-2" onClick={handleRegister}>
            Sign up
          </button>
          <button className="btn btn-dark" onClick={handleHome}>
            Back to home
          </button>

          <div>
            Already have an account click here{" "}
            <button onClick={handleLogin}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
