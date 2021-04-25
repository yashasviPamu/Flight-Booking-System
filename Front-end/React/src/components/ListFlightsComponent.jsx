import React, { Component } from "react";
import Service from "../services/Service";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const logout = () => {
  localStorage.removeItem("role");
};

class ListFlightsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
    };

    this.addFlight = this.addFlight.bind(this);
    this.editFlight = this.editFlight.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
  }

  deleteFlight(flightNumber) {
    Service.deleteFlight(flightNumber).then((res) => {
      this.setState({
        flights: this.state.flights.filter(
          (flight) => flight.flightNumber !== flightNumber
        ),
      });
    });
  }

  editFlight(flightNumber) {
    this.props.history.push(`/update-flight/${flightNumber}`);
  }

  componentDidMount() {
    Service.getFlights().then((res) => {
      this.setState({ flights: res.data });
    });
  }

  addFlight() {
    this.props.history.push("/add-flight");
  }

  render() {
    return (
      <div style={{ color: "white" }}>
        <div className="mx-n3">
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                <Link className="navbar-brand" to={"/"}>
                  <h2>FBS</h2>
                </Link>

                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  {localStorage.getItem("role") ===  "admin" ? (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/admin"}>
                          Dashboard
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          onClick={logout}
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
        </div>
        <div className="d-flex p-2 mx-n3 flight-table table-margin">
          <div className="mx-auto text-center">
            <h2 className="mx-auto">Flights List</h2>
          </div>
          <div className="mt-1">
            <button className="btn btn-primary" onClick={this.addFlight}>
              Add Flight
            </button>
          </div>
        </div>
        <div className="row flight-table">
          <Table hover striped bordered
            style={{ alignSelf: "center", color: "white" }}
          >
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>Flight Name</th>
                <th>Takeoff</th>
                <th>Landing</th>
                <th>Layover</th>
                <th>Duration</th>
                <th>Departure Date</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                <th>Flight Fare</th>
                <th>Seats</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.flights.map((flight) => (
                <tr key={flight.flightNumber}>
                  <td>{flight.flightNumber}</td>
                  <td>{flight.flightName}</td>
                  <td>{flight.takeoff}</td>
                  <td>{flight.landing}</td>
                  <td>{flight.layover.toString()}</td>
                  <td>{flight.duration}</td>
                  <td>{flight.departureDate}</td>
                  <td>{flight.departureTime}</td>
                  <td>{flight.arrivalTime}</td>
                  <td>{flight.flightFare}</td>
                  <td>{flight.totalSeats}</td>
                  <td>
                    <button
                      onClick={() => this.editFlight(flight.flightNumber)}
                      className="btn btn-info"
                      style={{ marginRight: "10px" }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteFlight(flight.flightNumber)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withRouter(ListFlightsComponent);
