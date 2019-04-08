package com.all4test.booksservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class OrderTotalException extends RuntimeException {

    private static final long serialVersionUID = -4024177137592939419L;

    public OrderTotalException() {
        super("Le montant total de la commande doit être positif !");
    }

}