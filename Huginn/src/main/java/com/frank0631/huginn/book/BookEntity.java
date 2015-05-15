package com.frank0631.huginn.book;

import com.frank0631.nidhog.book.Book;

import javax.persistence.*;

/**
 * Created by frank0631 on 5/12/15.
 */

@Entity
@Table(name = "BOOK")
public class BookEntity extends Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Override
    public String toString() {
        return String.format(
                "Book[title=%s, author='%s', publishDate='%s']",
                getTitle(), getAuthor(), getPublishDate());
    }
}
