import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListFlightsComponent from './components/ListFlightsComponent';
import CreateFlightComponent from './components/CreateFlightComponent';
import UpdateFlightComponent from './components/UpdateFlightComponent';
import ListBookingsComponent from './components/ListBookingsComponent';
import SearchFlights from './components/SearchFlights';
import Register from './loginAndRegistration/Register';
import BookingPage from './components/BookingPage';
import Login from './loginAndRegistration/Login';
import Ticket from './components/Ticket';
import AdminRoute from './loginAndRegistration/AdminRoute';
import UserRoute from './loginAndRegistration/UserRoute';
import ListTicketsComponent from './components/ListTicketsComponent';
import Admin from './components/Admin';

function App() {
  return (
    <div>
      <Router>
            <div className="container" style={{height:"100%",position:"relative"}}>
              <Switch>
                <Route path = "/" exact component = {SearchFlights}/>
                <AdminRoute path = "/bookings" component = {ListBookingsComponent}/>
                <AdminRoute path = "/flights" component = {ListFlightsComponent}/>
                <AdminRoute path = "/add-flight" component = {CreateFlightComponent}/> 
                <UserRoute path = "/search" component = {SearchFlights}/>
                <AdminRoute path = "/admin" component = {Admin}/>
                <UserRoute path = "/tickets" component = {ListTicketsComponent}/>
                <AdminRoute path = "/update-flight/:flightNumber" component = {UpdateFlightComponent}/>
                <UserRoute path = "/booking/:flightNumber" component = {BookingPage}/>
                <Route path = "/register" component = {Register}/>
                <Route path = "/login" component = {Login}/>
                <UserRoute path = "/ticket/:farenum" component = {Ticket}/>
              </Switch>
            </div>
      </Router>
    </div>
  );
}

export default App;
