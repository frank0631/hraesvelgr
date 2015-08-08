package com.frank0631.huginn.customer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by frank0631 on 5/12/15.
 */
@RepositoryRestResource(collectionResourceRel = "customers", path = "customers")
public interface CustomerRepository extends MongoRepository<CustomerEntity, String> {

    List<CustomerEntity> findByLastName(@Param("lastName") String lastName);

}
