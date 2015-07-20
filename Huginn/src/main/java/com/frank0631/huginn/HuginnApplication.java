package com.frank0631.huginn;

import com.frank0631.huginn.book.BookEntity;
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
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import javax.annotation.PostConstruct;
import javax.servlet.Servlet;
import java.net.URI;

@SpringBootApplication
@EnableAutoConfiguration
@Import(RestConfiguration.class)
@ComponentScan
public class HuginnApplication implements CommandLineRunner {


    @Autowired
    private CustomerRepository customerRepository;

    public static void main(String[] args) {
        SpringApplication.run(HuginnApplication.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        // save a couple of customers
        customerRepository.save(new CustomerEntity(new Customer("Jack", "Bauer")));
        customerRepository.save(new CustomerEntity(new Customer("Chloe", "O'Brian")));
        customerRepository.save(new CustomerEntity(new Customer("Kim", "Bauer")));
        customerRepository.save(new CustomerEntity(new Customer("David", "Palmer")));
        customerRepository.save(new CustomerEntity(new Customer("Michelle", "Dessler")));
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