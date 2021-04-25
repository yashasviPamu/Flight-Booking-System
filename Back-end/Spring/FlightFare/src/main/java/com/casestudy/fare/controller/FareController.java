package com.casestudy.fare.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.fare.model.Fare;
import com.casestudy.fare.service.FareService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/FBS/Fare")
public class FareController {
	@Autowired
	FareService fareService;
	
    @GetMapping("/fare")
    public Object getFareEstimator(Fare fare)
    {
    	return fareService.fareEstimator(fare);
    }
    
    @GetMapping("/fares")
    public ResponseEntity<?> getAllFares()
    {
    	return ResponseEntity.ok(fareService.getAll());
    }
    
    @GetMapping("/fare/{farenum}")
    public ResponseEntity<Optional<Fare>> getFare(@PathVariable int farenum)
    {
    	return ResponseEntity.ok(fareService.getByFarenum(farenum));
    }
}
