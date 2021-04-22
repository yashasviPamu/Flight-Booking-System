package com.casestudy.booking.model;

import lombok.*;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Bookings")
public class Booking {
	@Id
	private String bookingid;
    private List<Passenger> passengerList;
    private String pnr;
    private String userid;
    private String flightNumber;
    private double bookingAmount=0;
	
}
