package com.casestudy.fare.model;

import lombok.*;

import java.util.List;

import org.springframework.data.annotation.Id;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {
	@Id
	private int bookingid;
    private List<Passenger> passengerList;
    private String userid;
    private String flightNumber;
    private double bookingAmount=0;
	
}
