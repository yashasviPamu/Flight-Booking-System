import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Button, Table } from "react-bootstrap";
import Service from "../services/Service";
import Logout from "./Logout";
import { withRouter } from "react-router-dom";

function FlightSearch() {
  const history = useHistory();
  const [flights, setFlights] = useState([]);
  const [airportList, setAirportList] = useState([]);
  const [takeoff, setFlightTakeOffStation] = useState("");
  const [landing, setFlightLandingStation] = useState("");

  const [departureDate, setdepartureDate] = useState("");

  useEffect(() => {
    Service.getFlights()
      .then((response) => {
        setAirportList(response.data);
        setAirportList(response.data);
      })
      .catch((error) => console.error(`Error :  ${error}`));
  }, []);

  const searchFlights = async (event) => {
    event.preventDefault();
    let search = {
      takeoff,
      landing,
      departureDate,
    };
    const flightResp = await Service.getByTakeoffAndLandingAndDepartureDate(
      search
    );
    console.log(flightResp);
    setFlights(flightResp.data);
  };

  const selectFlight = (id) => {
    history.push(`/booking/${id}`);
  };

  return (
    <div>
      <Logout />
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-lg-4 mb-5 grid-margin">
            <div className="card h-100 flight-table" style={{color: "white"}}>
              <h4 className="card-header">Search Flights</h4>
              <div className="card-body">
                <form>
                  <br></br>
                  <div className="form-group">
                    <label> Source : </label>
                    <select
                      className="form-control"
                      name="departureAirport"
                      value={takeoff || ""}
                      onChange={(e) => {
                        setFlightTakeOffStation(e.target.value);
                      }}
                    >
                      <option value="">-</option>
                      {airportList.map((flight) => (
                        <option
                          key={flight.flightNumber}
                          value={flight.takeoff}
                        >
                          {flight.takeoff}
                        </option>
                      ))}
                    </select>
                  </div>
                  <br></br>

                  <div className="form-group">
                    <label> Destination : </label>
                    <select
                      className="form-control"
                      name="destinatonAirport"
                      value={landing || ""}
                      onChange={(e) => {
                        setFlightLandingStation(e.target.value);
                      }}
                    >
                      <option value="">-</option>
                      {airportList.map((flight) => (
                        <option
                          key={flight.flightNumber}
                          value={flight.landing}
                        >
                          {flight.landing}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date:</label>
                    <input
                      type="date"
                      name="departureDate"
                      className="form-control"
                      onChange={(e) => {
                        setdepartureDate(e.target.value);
                      }}
                    />
                  </div>

                  <br></br>
                  <br></br>
                  <div className="text-center">
                    <Button className="btn btn-info" onClick={searchFlights}>
                      Search
                    </Button>
                  </div>
                  <br></br>
                </form>
              </div>
            </div>
          </div>
          {flights.length !== 0 ? (
            <div className="col-lg-8 mb-5 grid-margin">
              <div className="card h-100 flight-table" style={{color: "white"}}>
                <h4 className="card-header">
                  Available Flights {takeoff} - {landing}
                </h4>
                <div className="card-body">
                  <Table
                    striped
                    bordered
                    hover
                    style={{
                      height: "250px",
                      overflow: "scroll",
                      display: "block",
                      color: "white"
                    }}
                  >
                    <thead>
                      <tr>
                        <th>FlightNumber</th>
                        <th>Takeoff</th>
                        <th>Departure Date</th>
                        <th>Departure Time</th>
                        <th>Landing</th>
                        <th>Arrival Date</th>
                        <th>Arrival Time</th>
                        <th>Flight Fare</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {flights.map((flight) => (
                        <tr key={flight.flightNumber}>
                          <td>{flight.flightNumber}</td>
                          <td>{flight.takeoff}</td>
                          <td>{flight.departureDate}</td>
                          <td>{flight.departureTime}</td>
                          <td>{flight.landing}</td>
                          <td>{flight.arrivalDate}</td>
                          <td>{flight.arrivalTime}</td>
                          <td>{flight.flightFare}</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => selectFlight(flight.flightNumber)}
                              className="btn btn-info"
                            >
                              Select
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default withRouter(FlightSearch);
