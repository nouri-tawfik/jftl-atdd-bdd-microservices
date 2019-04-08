package com.all4test.booksservices.repositories;

import com.all4test.booksservices.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book findById(final long id);
    Book findByIsbn(final String ISBN);
}
