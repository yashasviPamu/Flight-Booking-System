package com.casestudy.ticket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.ticket.model.Ticket;
import com.casestudy.ticket.service.TicketService;

@CrossOrigin(origins="*")
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
    
    @GetMapping("/ticket/userid/{userid}")
    public List<Ticket> getAllTicketsByUserid(@PathVariable String userid)
    {
    	return ticketService.getTicketByUserid(userid);
    }
    
    @GetMapping("/ticket/{pnr}")
    public Ticket getTicketByPnr(@PathVariable int pnr)
    {
    	return ticketService.getTicketBypnr(pnr);
    }
}
