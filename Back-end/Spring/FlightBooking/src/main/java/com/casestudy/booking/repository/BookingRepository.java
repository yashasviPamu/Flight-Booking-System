package com.casestudy.booking.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.booking.model.Booking;

public interface BookingRepository extends MongoRepository<Booking, Integer> {

	List<Booking> findByUserid(String userid);
   //public Booking deleteByReferenceNumber(int referenceNumber);
	
	Booking findByBookingid(int bookingid);
	
}

