package com.casestudy.fare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.casestudy.fare.model.Booking;
import com.casestudy.fare.model.Fare;
import com.casestudy.fare.repository.FareRepository;
import com.casestudy.fare.exception.NotFoundException;

import static com.casestudy.fare.model.Fare.REFERENCE;


@Service
public class FareService {
	@Autowired
	FareRepository fareRepository;
	
	@Autowired 
	private RestTemplate template;
	
	@Autowired
    private ReferenceNumberGenerator referenceNumberGenerator;

	public Object fareEstimator(Fare fare) {
        double gst = 0.18;
        double conveniencefee = 0.2;
        int bid = fare.getBookingid();
        Booking booking = template.getForObject("http://booking-service/FBS/Booking/getBooking/"+bid, Booking.class);
        int numOfPassengers = booking.getPassengerList().size();
        double amount = booking.getBookingAmount();
        double bookingfares = (amount + amount * conveniencefee + amount * gst) * numOfPassengers;
        fare.setBookingfare(bookingfares);
        fare.setFarenum(referenceNumberGenerator.getReferenceNumber(REFERENCE));
        return fareRepository.save(fare);
	}
	
	public List<Fare> getAll()
	{
		List<Fare> list = fareRepository.findAll();
		if(list.isEmpty())
    		throw new NotFoundException("No Flights Available");
    	return list;
	}
	
	public Optional<Fare> getByFarenum(int farenum){
		Optional<Fare> list = fareRepository.findById(farenum);
		if(!list.isPresent())
			throw new NotFoundException("Fare with the Farenum "+ farenum + " doesnot exist");
		return list;
	}
}
