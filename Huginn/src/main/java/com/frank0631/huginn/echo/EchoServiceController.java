package com.frank0631.huginn.echo;

import com.frank0631.nidhog.echo.TEchoService;
import org.apache.thrift.TException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class EchoServiceController implements TEchoService.Iface {

    @Autowired
    EchoService echoService;

    @Override
    @RequestMapping(value = "echo", method = RequestMethod.POST)
    public String echo(@RequestPart(value = "input") String input) throws TException {
        return echoService.echo(input);
    }

}