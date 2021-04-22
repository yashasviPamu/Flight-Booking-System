package com.casestudy.flights.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.flights.model.Flight;
import com.casestudy.flights.service.FlightService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/FBS/Flight")
public class FlightController {
	
	@Autowired
	FlightService flightService;
	
	@PostMapping("/addFlight")
	public ResponseEntity<?> saveFlightDetails(@RequestBody Flight flight) {
		flightService.saveFlight(flight);
		return new ResponseEntity<>("Added flight with flight number: "+flight.getFlightNumber(),HttpStatus.OK);
	}
	
	/*
	 * @GetMapping("/flights") public ResponseEntity<?> getFlights(){ return
	 * ResponseEntity.ok(flightService.getFlightsList()); }
	 */
	
	@GetMapping("/flights")
	public List<Flight> getAllFlights(){
		return flightService.getFlightsList();
	}
	
	@GetMapping("/flights/{flightNumber}") 
	public ResponseEntity<?> getFlightsByNumber(@PathVariable String flightNumber){ 
		return ResponseEntity.ok(flightService.getFlightByNumber(flightNumber));		 
	}
	
	@GetMapping("/flight/{takeoff}/{landing}/{departureDate}") 
	public ResponseEntity<?> getFlightByTakeoffLandingDepartureDate(@PathVariable String takeoff, @PathVariable String landing, @PathVariable String departureDate){
	    return ResponseEntity.ok(flightService.getFlightBySourceAndDestinationAndDepartureDate(takeoff, landing, departureDate)); 
	}
	
	@GetMapping("/flight/takeOff/{takeoff}") 
	public ResponseEntity<?> getFlightByTakeOff(@PathVariable String takeoff){
	    return ResponseEntity.ok(flightService.getFlightBySource(takeoff)); 
	}
	 
	@GetMapping("/flight/landing/{landing}") 
	public ResponseEntity<?> getFlightByLanding(@PathVariable String landing){
	    return ResponseEntity.ok(flightService.getFlightByDestination(landing)); 
	}
	
	@DeleteMapping("/flight/delete/{flightNumber}") 
	public ResponseEntity<?> DeleteFlight(@PathVariable String flightNumber){
	    flightService.delete(flightNumber); 
	    return new ResponseEntity<>("Successfully deleted with id "+flightNumber, HttpStatus.OK); 
	}
	
	@PutMapping("/updateFlight/{flightNumber}")
	public ResponseEntity<?> updateFlightDetails(@RequestBody Flight flight, @PathVariable String flightNumber) {
		flightService.update(flight, flightNumber);
		return ResponseEntity.ok("Updated flight with flight number: "+flight.getFlightNumber());
	}

}
