package com.frank0631.huginn.echo;

import org.springframework.stereotype.Component;

@Component
public class EchoService {

    public String echo(String input) {
        return input;
    }

}