package com.casestudy.fare.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.fare.model.Fare;

public interface FareRepository extends MongoRepository<Fare, Integer>{
	

}
