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
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import java.util.ArrayList;
import javax.servlet.Servlet;

@SpringBootApplication
@ComponentScan
public class HuginnApplication {

    public static void main(String[] args) {
        SpringApplication.run(HuginnApplication.class, args);
    }


}
