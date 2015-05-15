package com.frank0631.huginn.echo;

import com.frank0631.nidhog.echo.TEchoService;
import org.apache.thrift.TException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EchoServiceHandler implements TEchoService.Iface {

    @Autowired
    EchoService echoService;

    @Override
    public String echo(String input) throws TException {
        return echoService.echo(input);
    }
}