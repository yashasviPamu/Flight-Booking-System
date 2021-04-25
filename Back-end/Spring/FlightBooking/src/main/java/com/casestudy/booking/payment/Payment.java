package com.casestudy.booking.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {

    private String paymentStatus;
    private String transactionId;
    private String passengerName;
    private Long referenceNumber;
}
