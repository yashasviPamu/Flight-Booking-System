package com.casestudy.ticket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.ticket.model.Ticket;
import com.casestudy.ticket.service.TicketService;

@RestController
@RequestMapping("/FBS/Ticket")
public class TicketController {
	@Autowired
	TicketService ticketService;
	
    @GetMapping("/ticket")
    public Object getTicketEstimator(Ticket ticket)
    {
    	return ticketService.getTicket(ticket);
    }
}
