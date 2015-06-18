package com.frank0631.huginn.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @RequestMapping(value = "customer", method = RequestMethod.GET)
    public ResponseEntity<List<CustomerEntity>> getCustomerByLastName(
            @RequestParam(value = "lastName", required = true) final String lastName) {
        List<CustomerEntity> customerEntities = customerRepository.findByLastName(lastName);
        if (customerEntities.isEmpty())
            return new ResponseEntity<List<CustomerEntity>>(HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<List<CustomerEntity>>(customerEntities, HttpStatus.OK);
    }

}