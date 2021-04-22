package com.casestudy.fare.model;

import lombok.*;

import java.util.List;

import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {
	@Id
	private String id;
    private List<Passenger> passengerList;
    private String pnr;
    private String userid;
    private Flight flight;
    private double bookingAmount=0;
	
}
