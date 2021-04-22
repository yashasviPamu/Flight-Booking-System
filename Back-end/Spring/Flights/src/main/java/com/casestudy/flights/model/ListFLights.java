package com.casestudy.flights.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ListFLights {
	private List<Flight> var;
	
	public ListFLights()
	{
		
	}

	public ListFLights(List<Flight> var) {
		super();
		this.var = var;
	}

}
