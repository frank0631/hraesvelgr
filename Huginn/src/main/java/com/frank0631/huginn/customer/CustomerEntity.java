package com.frank0631.huginn.customer;

import com.frank0631.nidhog.customer.Customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by frank0631 on 5/13/15.
 */
@Entity
public class CustomerEntity extends Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    public CustomerEntity() {
    }

    public CustomerEntity(Customer customer) {
        super(customer);
    }

    public String getId() {
        return id;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, firstName='%s', lastName='%s']",
                id, getFirstName(), getLastName());
    }
}
