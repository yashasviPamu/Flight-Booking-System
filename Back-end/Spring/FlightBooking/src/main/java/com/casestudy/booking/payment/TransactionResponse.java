package com.casestudy.booking.payment;

import com.casestudy.booking.model.Booking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionResponse {
    private Booking booking;
    private String transactionId;
    private String message;
    private Long referenceNumber;
}
