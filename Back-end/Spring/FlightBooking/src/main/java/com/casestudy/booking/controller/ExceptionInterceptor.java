package com.casestudy.booking.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.casestudy.booking.exception.NotFoundException;
import com.casestudy.booking.exception.NotFoundExceptionSchema;

@ControllerAdvice
public class ExceptionInterceptor extends ResponseEntityExceptionHandler {

  @ExceptionHandler(NotFoundException.class)
  public final ResponseEntity<Object> handleAllExceptions(NotFoundException ex) {
	  NotFoundExceptionSchema exceptionResponse =
        new NotFoundExceptionSchema(ex.getMessage());
    return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
  }
}
