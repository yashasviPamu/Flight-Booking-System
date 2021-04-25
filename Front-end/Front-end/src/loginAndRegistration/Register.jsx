import Axios from "axios";
import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fullNameReg, setFullNameReg] = useState("");
  const [genderReg, setGenderReg] = useState("");
  const register = async() => {
      console.log("Came to register");
    const resp = await Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      fullname: fullNameReg,
      gender: genderReg,
    });
    console.log(resp)
  };
  return (
    <div className="App" style={{ color: "white"}}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              <h2>FBS</h2>
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {!localStorage.getItem("role") ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>
                      Register
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
      <div className="registration text-center">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
            required
          ></input>
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
            required
          ></input>
        </div>
        <br />
        <div>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter FullName"
            onChange={(e) => {
              setFullNameReg(e.target.value);
            }}
            required
          ></input>
        </div>
        <br />

        <div >
          <div>Gender</div>
          <label>
            {" "}
            Male:
            <input
              type="radio"
              name="gender"
              value="male"
              className="ml-1 mr-2"
              onChange={(event) => {
                setGenderReg(event.target.value);
              }}
              required
            />
          </label>
          <label>
            {" "}
            Female:
            <input
              type="radio"
              name="gender"
              value="female"
              className="ml-1"
              onChange={(event) => {
                setGenderReg(event.target.value);
              }}
              required
            />
          </label>
        </div>

        <button className="btn btn-success" onClick={() => {register(); console.log("clicked")}} >
          register
        </button>
      </div>
    </div>
  );
}

export default Register;