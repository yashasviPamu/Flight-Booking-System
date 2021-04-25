import React from 'react'
import { Link } from "react-router-dom";

const Logout = (props) => {
  const logout = () => {
    localStorage.removeItem("role");
    
};
const classes = props.className || "";

return (
  <div className = {classes}>
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <h2>FBS</h2>
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {localStorage.getItem("role") === "user" ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/search"}>
                    Search Flights
                  </Link>
                </li>

                <li className="nav-item">
                  <Link onClick={logout} className="nav-link" to={"/login"}>
                    Logout
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
    </div>
)
}
  
export default Logout;