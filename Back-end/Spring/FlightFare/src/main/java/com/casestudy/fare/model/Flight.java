package com.casestudy.fare.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

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
	@JsonFormat(pattern="yyyy-MM-dd")
    private String departureDate;
	@JsonFormat(pattern="yyyy-MM-dd")
	private String arrivalDate;
	private String departureTime;
	private String arrivalTime;
	private double flightFare;
	@NotNull(message = "seats must not be empty")
	private int totalSeats;
}
