package com.casestudy.ticket.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "ReferenceNumber")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DBReferenceNumber {
    @Id
    private String pnr;
    private int refNo;

}
