package com.all4test.booksservices.services;


import com.all4test.booksservices.exceptions.BookNotFoundException;
import com.all4test.booksservices.models.Book;
import com.all4test.booksservices.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book getBookById(long id) {
        Book book = bookRepository.findById(id);
        if (book == null)
            throw new BookNotFoundException(id);
        return book;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Boolean deleteBookById(long id) {
        if (bookRepository.findById(id) == null) {
            throw new BookNotFoundException(id);
        }

        bookRepository.delete(bookRepository.findById(id));
        return !bookRepository.existsById(id);
    }


    public Book getBookByISBN(final String isbn )
    {
        Book book =  bookRepository.findByIsbn(isbn);
        if(book ==null)
            throw new BookNotFoundException(isbn);

        return book;
    }
}
