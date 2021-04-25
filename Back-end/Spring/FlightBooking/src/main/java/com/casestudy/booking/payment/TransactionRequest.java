package com.casestudy.booking.payment;

import com.casestudy.booking.model.Booking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionRequest {

    private Booking booking;
    private Payment payment;
}

