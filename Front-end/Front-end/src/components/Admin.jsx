import React, { Component } from "react";
import AdminCard from "./AdminCard";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Admin extends Component {
  logout() {
    localStorage.removeItem("role");
  }
  render() {
    return (
      <div>
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to={"/admin"}>
            <h2>FBS</h2>
          </Link>

          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
          >
            {localStorage.getItem("role") === "admin" ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/flights"}>
                  Flights
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/bookings"}>
                    Bookings
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    onClick={this.logout.bind(this)}
                    className="nav-link"
                    to={"/login"}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
    <br/>
    <br/>
        <div className="row">
          <div className="col-md-4">
            <AdminCard imgsrc={'https://images.unsplash.com/photo-1612277655063-8b4c77c5cb02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} title="Flights" para="List of all flights"
           href="/flights" a="Go to Flights Home "/>
          </div>
          <div className="col-md-4">
            <AdminCard imgsrc={'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsaWdodCUyMHRpY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} title="Bookings" para="List of all bookings"
            href="/bookings" a="Go to Bookings"/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Admin);