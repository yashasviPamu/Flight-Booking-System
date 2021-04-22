package com.casestudy.flights.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.casestudy.flights.exception.NotFoundException;
import com.casestudy.flights.exception.NotFoundExceptionSchema;

@ControllerAdvice
public class ExceptionInterceptor extends ResponseEntityExceptionHandler {

  @ExceptionHandler(NotFoundException.class)
  public final ResponseEntity<Object> handleAllExceptions(NotFoundException ex) {
	  NotFoundExceptionSchema exceptionResponse =
        new NotFoundExceptionSchema(ex.getMessage());
    return new ResponseEntity(exceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
