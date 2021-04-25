import { useState } from "react";
import SubmitForm from "./SubmitForm";
import { useParams } from "react-router-dom";
import Logout from "./Logout";
import Service from "../services/Service";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

const BookingPage = () => {
  const [passengers, setPassengers] = useState([]);
  const [addingPassenger, setAddingPassenger] = useState(false);
  const { flightNumber } = useParams();
  const history = useHistory();
  const proceedNext = async () => {
    const userid = localStorage.getItem("userid");
    const bookingData = {
      passengerList: passengers,
      userid,
      flightNumber,
    };
    const resp = await Service.createBooking(bookingData);
    const bookingid = resp.data.bookingid;
    const fareData = { bookingid };
    const fareResp = await Service.createFare(fareData);
    history.push(`/ticket/${fareResp.data.farenum}`)
  };
  const deletePassenger = (index) => {
    let allPassengers = [...passengers];
    allPassengers = allPassengers.filter((pas, ind) => ind !== index);
    setPassengers(allPassengers);
  };
  return (
    <div>
      <Logout />
      {passengers.length > 0 && (
        <div className="row">
          {passengers.map((passenger, index) => (
            <div className="col-sm-4">
              <div className="card flight-table table-margin" style={{color:"white"}}>
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <div>Passenger {index + 1}</div>
                    <div className="text-secondary">
                      <span
                        role="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deletePassenger(index);
                        }}
                      >
                        X
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div><span>Name: </span><span>{passenger.firstName} {passenger.lastName}</span></div>
                  <div><span>Gender: </span><span>{passenger.gender}</span></div>
                  <div><span>Age: </span><span>{passenger.age}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!addingPassenger ? (
        <div className="text-center table-margin"><button className="btn btn-primary" onClick={() => setAddingPassenger(true)}>
        Add another passenger
      </button></div>
      ) : (
        <SubmitForm
          setAddingPassenger={setAddingPassenger}
          setPassengers={setPassengers}
          passengers={passengers}
        />
      )}
      {passengers.length > 0 && (
        <div className="text-center mt-2">
          <button className="btn btn-success" onClick={() => proceedNext()}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(BookingPage);
