package com.casestudy.ticket.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.ticket.model.Ticket;

public interface TicketRepository extends MongoRepository<Ticket, Integer>{

}
