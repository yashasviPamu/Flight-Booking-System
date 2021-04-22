package com.casestudy.fare.exception;

public class NotFoundExceptionSchema {
	private static final long serialVersionUID = 1L;
    private String message;

    public NotFoundExceptionSchema() {
    }

    public NotFoundExceptionSchema(String message) {
        this.message = message;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
