package com.frank0631.huginn.customer;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by frank0631 on 5/12/15.
 */
public interface CustomerRepository extends CrudRepository<CustomerEntity, Long> {

    List<CustomerEntity> findByLastName(String lastName);
}