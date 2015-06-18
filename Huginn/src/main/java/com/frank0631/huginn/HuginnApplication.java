package com.frank0631.huginn;

import com.frank0631.huginn.calculator.CalculatorServiceHandler;
import com.frank0631.huginn.customer.CustomerEntity;
import com.frank0631.huginn.customer.CustomerRepository;
import com.frank0631.huginn.echo.EchoServiceHandler;
import com.frank0631.nidhog.calculator.TCalculatorService;
import com.frank0631.nidhog.customer.Customer;
import com.frank0631.nidhog.echo.TEchoService;
import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.protocol.TProtocolFactory;
import org.apache.thrift.server.TServlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Servlet;

@Configuration
@EnableAutoConfiguration
@ComponentScan
public class HuginnApplication implements CommandLineRunner {

    @Autowired
    CustomerRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(HuginnApplication.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        // save a couple of customers
        repository.save(new CustomerEntity(new Customer("Jack", "Bauer")));
        repository.save(new CustomerEntity(new Customer("Chloe", "O'Brian")));
        repository.save(new CustomerEntity(new Customer("Kim", "Bauer")));
        repository.save(new CustomerEntity(new Customer("David", "Palmer")));
        repository.save(new CustomerEntity(new Customer("Michelle", "Dessler")));

        // fetch all customers
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Customer customer : repository.findAll()) {
            System.out.println(customer);
        }
        System.out.println();

        // fetch an individual customer by ID
        Customer customer = repository.findOne(1L);
        System.out.println("Customer found with findOne(1L):");
        System.out.println("--------------------------------");
        System.out.println(customer);
        System.out.println();

        // fetch customers by last name
        System.out.println("Customer found with findByLastName('Bauer'):");
        System.out.println("--------------------------------------------");
        for (Customer bauer : repository.findByLastName("Bauer")) {
            System.out.println(bauer);
        }
    }

    @Bean
    public TProtocolFactory tProtocolFactory() {
        //return new TBinaryProtocol.Factory();
        return new TJSONProtocol.Factory();
    }

    //Calculator
    @Bean
    public Servlet calculator(TProtocolFactory protocolFactory, CalculatorServiceHandler handler) {
        return new TServlet(new TCalculatorService.Processor<CalculatorServiceHandler>(handler), protocolFactory);
    }

    //Echo
    @Bean
    public Servlet echo(TProtocolFactory protocolFactory, EchoServiceHandler handler) {
        return new TServlet(new TEchoService.Processor<EchoServiceHandler>(handler), protocolFactory);
    }


}