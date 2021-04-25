package com.casestudy.fare.service;

import com.casestudy.fare.model.DBReferenceNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

@Service
public class ReferenceNumberGenerator {
    @Autowired
    private MongoOperations mongoOperations;


    public int getReferenceNumber(String reference)
    {
        Query query = new Query(Criteria.where("farenum").is(reference));
        //update the sequence no
        Update update = new Update().inc("refNo", 1);
        //modify in document
        DBReferenceNumber counter = mongoOperations
                .findAndModify(query,
                        update, options().returnNew(true).upsert(true),
                        DBReferenceNumber.class);

        return !Objects.isNull(counter) ? counter.getRefNo() : 1;
    }
}
