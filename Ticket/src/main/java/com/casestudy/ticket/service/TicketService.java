package com.casestudy.ticket.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.casestudy.ticket.model.Flight;
import com.casestudy.ticket.model.Booking;
import com.casestudy.ticket.model.Fare;
import com.casestudy.ticket.model.Ticket;
import com.casestudy.ticket.repository.TicketRepository;

@Service
public class TicketService {
	@Autowired 
	TicketRepository ticketRepository;
	
	@Autowired 
	private RestTemplate template;
	
	public Object getTicket(Ticket ticket)
	{
		int farenumber = ticket.getFarenum();
		Fare fare = template.getForObject("http://fare-management/FBS/Fare/fare/"+farenumber, Fare.class);
		System.out.println(fare);
		double amount = fare.getBookingfare();
		
		String bid = fare.getBookingid();
		Booking booking = template.getForObject("http://booking-service/FBS/Booking/getBooking/"+bid, Booking.class);
		System.out.println(booking);
		
		String fn = booking.getFlightNumber();
		Flight flight= template.getForObject("http://flight-management/FBS/Flight/flights/"+fn, Flight.class);
		System.out.println(flight);
		
		ticket.setFlightNumber(flight.getFlightNumber());
		ticket.setFlightName(flight.getFlightName());
		ticket.setTakeoff(flight.getTakeoff());
		ticket.setLanding(flight.getLanding());
		ticket.setDuration(flight.getDuration());
		ticket.setDepartureDate(flight.getDepartureDate());
		ticket.setDepartureTime(flight.getDepartureTime());
		ticket.setArrivalTime(flight.getArrivalTime());
		ticket.setPassengerList(booking.getPassengerList());
		ticket.setPnr(booking.getPnr());
		ticket.setTicketAmount(amount);
		
		return ticketRepository.save(ticket);
	}

}
