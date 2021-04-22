package com.casestudy.fare.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Fares")
public class Fare {
	@Id
	private int farenum;
	private String bookingid;
	private double bookingfare;
}
