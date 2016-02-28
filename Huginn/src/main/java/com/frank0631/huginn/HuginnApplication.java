package com.frank0631.huginn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class HuginnApplication {

    public static void main(String[] args) {
        SpringApplication.run(HuginnApplication.class, args);
    }


}
