import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSignup = () => {
    console.log("test");
    history.push("/register");
  };
  const handleLogin = () => {
    console.log("test");
    if (email !== "" && password !== "") {
        let data ={
            "email":email,
            "password": password
        }
        axios({
            method:"POST",
            url:"https://reqres.in/api/login",
            data:data
        })
        .then(res=>{
            console.log(res.data)
            window.localStorage.setItem("jwtToken", res.data.token)
            history.push("/");
    })
  }
}
  const handleHome = () => {
    history.push("/")
}
  console.log(email, password);
  return (
    <div className="card mt-5 bg-info mx-auto w-50">
      <div className="card-body">
        <h3 className="text-center">Login</h3>

        <input
          className="form-control my-3"
          placeholder="Enter your email"
          onChange={(e) => handleEmail(e)}
        />
        <input
          type="password"
          className="form-control my-3"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="d-flex justify-content-between">
          <div>
            <button className="btn btn-light" onClick={handleLogin}>
              Sign In
            </button>
          </div>
          <button className="btn btn-light" onClick={handleHome}>Back to home</button> 
          <div className="text-white">
            New user? click to register yourself{" "}
            <button onClick={handleSignup}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
