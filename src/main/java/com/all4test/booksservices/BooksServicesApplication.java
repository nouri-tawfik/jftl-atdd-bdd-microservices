package com.all4test.booksservices;

import com.all4test.booksservices.models.Book;
import com.all4test.booksservices.repositories.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BooksServicesApplication {
    @Bean
    public CommandLineRunner initializeDb(BookRepository repository) {
        return (args) -> {
            // Init repository (delete All data)
            repository.deleteAll();

            Book book = new Book();
            book.setDescription("Pratiques agiles ATDD/BDD");
            book.setTitle("ATDD/BDD");
            book.setAuthor("Tawfik");
            book.setPrice(90);
            book.setIsbn("TN00A1");

            repository.save(book);


            book = new Book();
            book.setDescription("Outil ATDD/BDD");
            book.setTitle("Cucumber");
            book.setAuthor("Tawfik");
            book.setPrice(45);
            book.setIsbn("TN00A2");

            repository.save(book);


            book = new Book();
            book.setDescription("DevOps");
            book.setTitle("Docker");
            book.setAuthor("Tawfik");
            book.setPrice(35);
            book.setIsbn("TN00A3");

            repository.save(book);

        };
    }

    public static void main(String[] args) {
        SpringApplication.run(BooksServicesApplication.class, args);
    }
}
