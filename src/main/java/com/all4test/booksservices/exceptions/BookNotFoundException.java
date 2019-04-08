package com.all4test.booksservices.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class BookNotFoundException extends RuntimeException {

    private static final long serialVersionUID = -7243396709225776929L;

    public BookNotFoundException(Long bookId) {
        super("Aucun résultat n'a été trouvé pour l'id " + bookId);
    }

    public BookNotFoundException(String isbn) {
        super("Aucun résultat n'a été trouvé pour l'ISBN" + isbn);
    }

}