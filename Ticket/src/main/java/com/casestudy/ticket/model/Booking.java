package com.casestudy.ticket.model;

import lombok.*;

import java.util.List;

import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {
	@Id
	private String bookingid;
    private List<Passenger> passengerList;
    private String pnr;
    private String userid;
    private String flightNumber;
    private double bookingAmount=0;
	
}
