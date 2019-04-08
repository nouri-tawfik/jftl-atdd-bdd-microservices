package com.all4test.booksservices.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import groovy.transform.Field;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    @JsonProperty("Titre")
    @NotNull(message = "error.title.not_null")
    private String title;

    @Column
    //@JsonProperty("ISBN")
    @NotNull(message = "error.isbn.not_null")
    private String isbn;

    public Integer getPrice() {
        return Price;
    }

    public void setPrice(Integer price) {
        Price = price;
    }

    @Column
    //@JsonProperty("Prix")
    private Integer Price;

    @Column
    //@JsonProperty("Auteur")
    @NotNull(message = "error.author.not_null")
    private String author;


    @Column
    //@JsonProperty("Résumé")
    private String description;

    public Book(String title) {

    }

    public Book(String title, String author, String description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }

    public Book() {}

    public String getTitle() {
        return title;
    }

    public Book setTitle(String value) {
        title = value;
        return this;
    }


    public String getDescription() {
        return description;
    }

    public Book setDescription(String value) {
        description = value;
        return this;
    }

    public Long getId() {
        return id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
       this.author = author;
    }
}
