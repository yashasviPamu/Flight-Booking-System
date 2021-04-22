package com.casestudy.booking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.booking.model.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {

	List<Booking> findByUserid(String userid);
   //public Booking deleteByReferenceNumber(int referenceNumber);
	
	Booking findByBookingid(String bookingid);
	
	Optional<Booking> findByPnr(String pnr);
}

