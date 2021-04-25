package com.casestudy.ticket.model;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flight {
	@Id
	private String flightNumber;
	private String flightName;
	private String takeoff;
	private String landing;
	private boolean layover;
	private String duration;
    private String departureDate;
	private String arrivalDate;
	private String departureTime;
	private String arrivalTime;
	private double flightFare;
	private int totalSeats;
}
