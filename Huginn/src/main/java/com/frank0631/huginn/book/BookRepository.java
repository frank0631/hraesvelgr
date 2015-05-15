package com.frank0631.huginn.book;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by frank0631 on 5/12/15.
 */
public interface BookRepository extends CrudRepository<BookEntity, Long> {

    List<BookEntity> findByTitle(String title);
}