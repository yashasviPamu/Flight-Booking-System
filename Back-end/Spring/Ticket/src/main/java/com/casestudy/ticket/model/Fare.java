package com.casestudy.ticket.model;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class Fare {
	@Id
	private int farenum;
	private int bookingid;
	private double bookingfare;
}
