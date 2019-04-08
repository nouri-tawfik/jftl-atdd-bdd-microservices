package com.all4test.booksservices.controllers;

import com.all4test.booksservices.models.Book;
import com.all4test.booksservices.repositories.BookRepository;
import com.all4test.booksservices.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/books")
public class BooksController {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookService service;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<Book>> getAllBooks() {
        return ResponseEntity.ok( service.getAllBooks());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) {
        return ResponseEntity.ok( service.getBookById(id));
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addBook(@Validated @RequestBody Book book) {
        return new ResponseEntity<>(service.addBook(book), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteBook(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.deleteBookById(id));
    }


    @RequestMapping( value = "search/isbn/{isbn}" , method = RequestMethod.GET)
    public ResponseEntity<Book> getBookByISBN(
            @PathVariable( "isbn" ) final String isbn )
    {
        return ResponseEntity.ok( service.getBookByISBN( isbn ) );
    }


}
