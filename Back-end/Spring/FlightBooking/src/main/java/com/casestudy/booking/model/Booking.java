package com.casestudy.booking.model;

import lombok.*;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Bookings")
public class Booking {
	@Transient
    public static final String REFERENCE = "booking_reference";
	@Id
	private int bookingid;
    private List<Passenger> passengerList;
    private String userid;
    private String flightNumber;
    private double bookingAmount=0;
	
}
