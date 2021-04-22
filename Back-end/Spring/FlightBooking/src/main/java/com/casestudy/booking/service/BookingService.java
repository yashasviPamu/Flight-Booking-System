package com.casestudy.booking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.casestudy.booking.exception.NotFoundException;
import com.casestudy.booking.model.Booking;
import com.casestudy.booking.model.Flight;
import com.casestudy.booking.repository.BookingRepository;

@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    private RestTemplate template;
    
	public String addBooking(Booking booking) {
		String fn=booking.getFlightNumber();
		System.out.println(fn);
		Flight flight= template.getForObject("http://flight-management/FBS/Flight/flights/"+fn, Flight.class);
		booking.setBookingAmount(flight.getFlightFare());
		bookingRepository.save(booking);
		return "Flight Booked with: " + booking.getBookingid();
	}
	
	public String updateBooking(Booking booking, String bookingid) {
		Optional<Booking> list=bookingRepository.findById(bookingid); 
		System.out.println(list);
		if(!list.isPresent())
			throw new NotFoundException("Booking with the id "+ bookingid + "not exist");
		bookingRepository.deleteById(bookingid);
		bookingRepository.save(booking);
		return "Booking Updated with: " + booking.getBookingid();
	}
	
	public String deleteBooking(String bookingid) {
		if (bookingRepository.existsById(bookingid)) {
			bookingRepository.deleteById(bookingid);
			return "Booking Deleted with booking Id : "+ bookingid;
		} else {
			throw new NotFoundException("Booking with Id "+bookingid+" not exist");
		}
	}
	
	public Optional<Booking> getBooking(String bookingId) {
		Optional<Booking> booking = bookingRepository.findById(bookingId);
		if (!booking.isPresent()) {
			throw new NotFoundException("No Booking available with bookingId : " + bookingId);
		}
		return booking;
	}
	
	public Optional<Booking> getBookingBypnr(String pnr) {
		Optional<Booking> booking = bookingRepository.findByPnr(pnr);
		if (booking.isPresent())
		{
			throw new NotFoundException("No Booking available with PNR : " + pnr);
		}
		return booking;
	}
	
	public List<Booking> getAllBookings() {
		List<Booking> allBookingList = bookingRepository.findAll();
		if (allBookingList.isEmpty()) {
			throw new NotFoundException("No Booking available");
		}
		return allBookingList;
	}
	
	public List<Booking> getBookingsByUserId(String userid) {
		List<Booking> bookingList = bookingRepository.findByUserid(userid);
		if (bookingList.isEmpty()) {
			throw new NotFoundException("No Booking available with userId : " + userid);
		}
		return bookingList;
	}

}
