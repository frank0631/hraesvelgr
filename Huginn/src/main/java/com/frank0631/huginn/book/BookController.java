package com.frank0631.huginn.book;

import com.frank0631.nidhog.book.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @RequestMapping(method = RequestMethod.GET,
            produces = {MediaType.APPLICATION_JSON_VALUE},
            consumes = {MediaType.ALL_VALUE})
    public ResponseEntity<Book> getBookByTitle(
            @RequestParam(value = "title", required = true) final String title) {

        Book book = bookRepository.findByTitle(title).iterator().next();
        if (book != null) {
            return new ResponseEntity<Book>(book, HttpStatus.OK);
        } else {
            return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
        }
    }
}