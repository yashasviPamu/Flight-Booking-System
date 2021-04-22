package com.casestudy.flights.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.casestudy.flights.model.Flight;

public interface FlightRepository extends MongoRepository<Flight, String>{
	
	List<Flight> findByTakeoffAndLandingAndDepartureDate(String takeoff, String landing, String departureDate);
	
	@Query("{ 'takeoff' : ?0 }")
	List<Flight> findByTakeoff(String from);
	
	@Query("{ 'landing' : ?0 }")
	List<Flight> findByLanding(String to);
	
	void deleteByFlightNumber(String flightNumber);

	/*
	 * Flight findByNumber(String flightNumber);
	 * 
	 * void deleteByNumber(String flightNumber);
	 */
	
}
