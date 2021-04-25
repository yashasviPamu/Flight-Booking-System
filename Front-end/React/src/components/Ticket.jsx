import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Service from "../services/Service";
import Logout from "./Logout";
import { withRouter } from "react-router-dom";

const Ticket = () => {
  const [ticketData, setTicketData] = useState(null);
  const { farenum } = useParams();
  const getTicketDetails = async () => {
    const resp = await Service.createTicket({ farenum });
    setTicketData(resp.data);
  };
  useEffect(() => {
    getTicketDetails();
  }, []);
  return (
    <div>
    <Logout/>
      {" "}
      {ticketData ? (
        <table className="flight-table w-50 mx-auto mt-5 mb-3" style={{color:"black",fontWeight:"bold"}}>
           <tr style={{color:"white"}}><td className="text-center"><h3>Ticket Booked with PNR </h3></td> <td><h3>{ticketData.pnr}</h3></td></tr><br/>
          <tr>
            <td className="text-center">PNR</td>
            <td>{ticketData.pnr}</td>
          </tr> <br/>
          <tr>
            <td className="text-center">Flight Number</td>
            <td>{ticketData.flightNumber}</td>
          </tr> <br/>
          <tr>
            <td className="text-center">Flight Name</td>
            <td>{ticketData.flightName}</td>
          </tr> <br/>
          <tr>
            <td className="text-center">Takeoff</td>
            <td>{ticketData.takeoff}</td>
          </tr> <br/>
          <tr>
            <td className="text-center">Landing</td>
            <td>{ticketData.landing}</td>
          </tr> <br/>
          <tr>
            <td className="text-center">Departure Date</td>
            <td>{ticketData.departureDate}</td>
          </tr> <br/>
          <tr>
            <td className="text-center">Departure Time</td>
            <td>{ticketData.departureTime}</td>
          </tr> <br/>
          <tr>
            <td className="text-center">Arrival Time</td>
            <td>{ticketData.arrivalTime}</td>
          </tr> <br/>
          {ticketData.passengerList.map((passenger, index) => (
            <tr rowSpan={3}>
              <td className="text-center">Passenger {index + 1} </td>
              <td>
                <span> First Name: {passenger.firstName} </span>
                <br /> <span>Last Name: {passenger.lastName} </span>
                <br /> <span>Age: {passenger.age}</span>
                <br /> <span>Gender: {passenger.gender}</span> <br/> <br/>
              </td> 
            </tr>
            
          ))}
          <tr>
            <td className="text-center">Ticket Amount</td>
            <td>{ticketData.ticketAmount}</td>
          </tr> <br/>
        </table>
      ) : <div className="spinner-border mx-auto table-margin" role="status" style={{color:"white"}}>
      <span className="sr-only">Loading...</span>
    </div>}
    </div>
  );
};

export default withRouter(Ticket);
