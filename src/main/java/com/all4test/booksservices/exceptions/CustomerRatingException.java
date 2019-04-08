package com.all4test.booksservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class CustomerRatingException extends RuntimeException {

    private static final long serialVersionUID = -7243396709225776929L;

    public CustomerRatingException(String customerRating) {
        super("La catégorie " + customerRating + " n'est pas supportée");
    }

}