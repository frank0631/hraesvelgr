package com.frank0631.huginn.echo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class EchoServiceController {

    @Autowired
    EchoService echoService;

    @RequestMapping(value = "echo", method = RequestMethod.POST)
    public
    @ResponseBody
    OutputString echo(@RequestParam("input") String inputString) {
        OutputString outputString = new OutputString();
        outputString.output = echoService.echo(inputString);
        return outputString;
    }

    class OutputString {
        String output;

        public OutputString() {
        }

        public String getOutput() {
            return output;
        }

        public void setOutput(String output) {
            this.output = output;
        }
    }

    //@ResponseBody

}