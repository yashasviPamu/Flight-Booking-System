import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
    console.log(response)
        if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("logged in " + response.data[0].username);
        
        localStorage.setItem("role", response.data[0].role);
        localStorage.setItem("userid", response.data[0].userid);
        if (localStorage.getItem("role") === "admin") {
          history.push("/admin");
        } else if (localStorage.getItem("role") === "user") {
          history.push("/search");
        } else {
          history.push("/search");
        }
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="App">
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

      <div className="container text-center " style={{color:"white"}}>
        <h1>Login</h1><br /> <br />
        <div>
        
        <label for="Username" className="mr-3"><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }} required
          ></input>
        </div>
        <br />
        <div>
        <label for="Password" className="mr-3"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }} required
          ></input>
        </div>
        <br />

        <button className="btn btn-success" onClick={login}>
          login
        </button>
        <div>
          <div>
            <h2>{loginStatus}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;