package com.casestudy.ticket.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.casestudy.ticket.model.Flight;
import com.casestudy.ticket.model.Booking;
import com.casestudy.ticket.model.Fare;
import com.casestudy.ticket.model.Ticket;
import com.casestudy.ticket.repository.TicketRepository;

import static com.casestudy.ticket.model.Ticket.REFERENCE;

@Service
public class TicketService {
	@Autowired 
	TicketRepository ticketRepository;
	
	@Autowired 
	private RestTemplate template;
	
	@Autowired
    private ReferenceNumberGenerator referenceNumberGenerator;
	
	public Object getTicket(Ticket ticket)
	{
		int farenumber = ticket.getFarenum();
		Fare fare = template.getForObject("http://fare-management/FBS/Fare/fare/"+farenumber, Fare.class);
		//System.out.println(fare);
		double amount = fare.getBookingfare();
		
		int bid = fare.getBookingid();
		Booking booking = template.getForObject("http://booking-service/FBS/Booking/getBooking/"+bid, Booking.class);
		//System.out.println(booking);
		
		String fn = booking.getFlightNumber();
		Flight flight= template.getForObject("http://flight-management/FBS/Flight/flights/"+fn, Flight.class);
		//System.out.println(flight);
		int totalseats = flight.getTotalSeats()-booking.getPassengerList().size();
		//System.out.println(totalseats);
		flight.setTotalSeats(totalseats);
		//System.out.println(flight);
		
		Map < String, String > params= new HashMap < String, String >();
		params.put("flightNumber", fn);
     	template.postForObject("http://flight-management/FBS/Flight/updateFlight/{flightNumber}", flight, Flight.class, params);
//		Flight flight1= template.getForObject("http://flight-management/FBS/Flight/flights/"+fn, Flight.class);
//		System.out.println(flight1);
		
     	ticket.setPnr(referenceNumberGenerator.getReferenceNumber(REFERENCE));
		ticket.setFlightNumber(flight.getFlightNumber());
		ticket.setFlightName(flight.getFlightName());
		ticket.setTakeoff(flight.getTakeoff());
		ticket.setLanding(flight.getLanding());
		ticket.setDuration(flight.getDuration());
		ticket.setDepartureDate(flight.getDepartureDate());
		ticket.setDepartureTime(flight.getDepartureTime());
		ticket.setArrivalTime(flight.getArrivalTime());
		ticket.setPassengerList(booking.getPassengerList());
		ticket.setTicketAmount(amount);
		ticket.setUserid(booking.getUserid());	
		return ticketRepository.save(ticket);
	}
	
	public List<Ticket> getTicketByUserid(String userid) {
		return ticketRepository.findByUserid(userid);
	}
	
	public Ticket getTicketBypnr(int pnr)
	{
		return ticketRepository.findById(pnr).get();
	}

}
