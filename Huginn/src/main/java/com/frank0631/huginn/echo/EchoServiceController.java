package com.frank0631.huginn.echo;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.frank0631.nidhog.echo.TEchoService;
import org.apache.thrift.TException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static org.springframework.http.MediaType.*;

@RestController
@RequestMapping("api")
public class EchoServiceController{

    @Autowired
    EchoService echoService;

    class OutputString{
        public OutputString(){}

        public String getOutput() {
            return output;
        }

        public void setOutput(String output) {
            this.output = output;
        }

        String output;
    }

    @RequestMapping(value = "echo", method = RequestMethod.POST)
    public @ResponseBody OutputString echo(@RequestParam("input") String inputString){
        OutputString outputString = new OutputString();
        outputString.output = echoService.echo(inputString);
        return outputString;
    }

    //@ResponseBody

}