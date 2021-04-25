import React, { Component } from "react";
import Service from "../services/Service";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const logout = () => {
  localStorage.removeItem("role");
};

class ListTicketsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
    };

  }

  componentDidMount() {
    Service.getTickets(localStorage.getItem('userid')).then((res) => {
      this.setState({ tickets: res.data });
    });
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
                  {localStorage.getItem("role") === "user" ? (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/search"}>
                          Search Flights
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
            <h2 className="mx-auto">Tickets List</h2>
          </div>
        </div>
        <div className="row flight-table w-100vh">
          <Table hover striped bordered
            style={{ color: "white" }}
          >
            <thead>
              <tr>
                <th>PNR</th>
                <th>Number of Passengers</th>
                <th>Flight Number</th>
                <th>Takeoff</th>
                <th>Landing</th>
                <th>Departure Date</th>
                <th>Ticket Amount</th>
              </tr>
            </thead>

            <tbody>
              {this.state.tickets.map((ticket) => (
                <tr key={ticket.pnr}>
                  <td>{ticket.pnr}</td>
                  <td>{ticket.passengerList.length}</td>
                  <td>{ticket.flightNumber}</td>
                  <td>{ticket.takeoff}</td>
                  <td>{ticket.landing}</td>
                  <td>{ticket.departureDate}</td>
                  <td>{ticket.ticketAmount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withRouter(ListTicketsComponent);
