import axios from 'axios';

const FLIGHT_API_BASE_URL = "http://localhost:8001/FBS/Flight";

const BOOKING_API_BASE_URL = "http://localhost:8002/FBS/Booking/";

const Fare_API_BASE_URL = "http://localhost:8003/FBS/Fare/fare";

const TICKET_API_BASE_URL = "http://localhost:8004/FBS/Ticket/ticket";

let Service = {
    getFlights : () => {return axios.get(FLIGHT_API_BASE_URL+"/flights");},
    createFlight : (flight) => {return axios.post(FLIGHT_API_BASE_URL+"/addFlight",flight);}, 
    getFlightsByFlightNumber : (flightNumber) => {return axios.get(FLIGHT_API_BASE_URL+"/flights/"+flightNumber);},
    updateFlight : (flight, flightNumber) => {return axios.put(FLIGHT_API_BASE_URL+"/updateFlight/"+flightNumber, flight);},
    deleteFlight : (flightNumber) => {return axios.delete(FLIGHT_API_BASE_URL+"/flight/delete/"+flightNumber)},
    getByTakeoffAndLandingAndDepartureDate : ({takeoff, landing, departureDate}) => {
        const url = FLIGHT_API_BASE_URL+"/flight/"+takeoff+"/"+landing+"/"+departureDate;
        console.log(url);
        return axios.get(url);
    },
    
    createBooking : (booking) => {return axios.post(BOOKING_API_BASE_URL+"/addBooking", booking);},
    getBookings : () => {return axios.get(BOOKING_API_BASE_URL+"/allBookings");},
    deleteBooking : (bookingid) => {return axios.delete(BOOKING_API_BASE_URL+"/deleteBooking/"+bookingid);},

    createFare : (fare) => {return axios.get(Fare_API_BASE_URL+`?bookingid=${fare.bookingid}`);},

    createTicket : (ticket) => {return axios.get(TICKET_API_BASE_URL+`?farenum=${ticket.farenum}`);},
    getTickets : (userid) => {return axios.get(TICKET_API_BASE_URL+"/userid/"+userid)},
    getTicketsByPnr : (pnr) => {return axios.get(TICKET_API_BASE_URL+"/"+pnr)}
}

export default Service;