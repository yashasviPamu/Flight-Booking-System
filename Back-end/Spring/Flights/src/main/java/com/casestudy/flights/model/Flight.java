package com.casestudy.flights.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Flights")
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
