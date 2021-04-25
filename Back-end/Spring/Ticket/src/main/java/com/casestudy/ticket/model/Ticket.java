package com.casestudy.ticket.model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.ToString;

@ToString

@Document(collection="Ticket")
public class Ticket {
	@Transient
	  public static final String REFERENCE = "booking_reference";
	@Id
	private int pnr;
	private int farenum;
	private String flightNumber;
	private String flightName;
	private String takeoff;
	private String landing;
	private String duration;
	private String departureDate;
	private String departureTime;
	private String arrivalTime;
    private List<Passenger> passengerList;
    private double ticketAmount;
    private String userid;
    
	public int getFarenum() {
		return farenum;
	}
	public void setFarenum(int farenum) {
		this.farenum = farenum;
	}
	public String getFlightNumber() {
		return flightNumber;
	}
	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}
	public String getTakeoff() {
		return takeoff;
	}
	public void setTakeoff(String takeoff) {
		this.takeoff = takeoff;
	}
	public String getLanding() {
		return landing;
	}
	public void setLanding(String landing) {
		this.landing = landing;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
	public String getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}
	public String getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public List<Passenger> getPassengerList() {
		return passengerList;
	}
	public void setPassengerList(List<Passenger> passengerList) {
		this.passengerList = passengerList;
	}
	public double getTicketAmount() {
		return ticketAmount;
	}
	public void setTicketAmount(double ticketAmount) {
		this.ticketAmount = ticketAmount;
	}
	public int getPnr() {
		return pnr;
	}
	public void setPnr(int pnr) {
		this.pnr = pnr;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	
}
