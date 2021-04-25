package com.casestudy.booking.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "ReferenceNumber1")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DBReferenceNumber {
    @Id
    private String bookingid;
    private int refNo;

}
