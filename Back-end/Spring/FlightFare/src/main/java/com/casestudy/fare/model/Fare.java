package com.casestudy.fare.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Fares")
public class Fare {
	@Transient
    public static final String REFERENCE = "booking_reference";
	@Id
	private int farenum;
	private int bookingid;
	private double bookingfare;
}
