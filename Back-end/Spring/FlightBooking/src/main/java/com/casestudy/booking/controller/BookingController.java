package com.casestudy.booking.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.casestudy.booking.model.Booking;
import com.casestudy.booking.service.BookingService;

@CrossOrigin(origins="*")
@RequestMapping("/FBS/Booking")
@RestController
public class BookingController {

    @Autowired
    BookingService bookingService;

    @GetMapping("/getBookingsByUserId/{userid}")
	public ResponseEntity<List<Booking>> getBookingsByUserId(@PathVariable String userid) {
		return ResponseEntity.ok(bookingService.getBookingsByUserId(userid));		
	}

	@GetMapping("/allBookings")
	public ResponseEntity<List<Booking>> getAllBookings() {
		return ResponseEntity.ok(bookingService.getAllBookings());		
	}

	@GetMapping("/getBooking/{bookingId}")
	public ResponseEntity<Optional<Booking>> getBooking(@PathVariable int bookingId) {
		return ResponseEntity.ok(bookingService.getBooking(bookingId));
	}

	@PostMapping("/addBooking")
	public ResponseEntity<Booking> addBooking(@RequestBody Booking booking) {
		return ResponseEntity.ok(bookingService.addBooking(booking));
	}

	@PutMapping("/updateBooking/{bookingid}")
	public ResponseEntity<String> updateBooking(@RequestBody Booking booking, @PathVariable int bookingid) {
		return ResponseEntity.ok(bookingService.updateBooking(booking, bookingid));
	}
	
	@DeleteMapping("/deleteBooking/{bookingId}")
	public ResponseEntity<String> deleteBooking(@PathVariable int bookingId) {
		return ResponseEntity.ok(bookingService.deleteBooking(bookingId));
	}
	
}
