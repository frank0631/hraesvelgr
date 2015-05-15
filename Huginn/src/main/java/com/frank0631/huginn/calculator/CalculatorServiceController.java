package com.frank0631.huginn.calculator;

import com.frank0631.nidhog.calculator.TCalculatorService;
import com.frank0631.nidhog.calculator.TOperation;
import org.apache.thrift.TException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class CalculatorServiceController implements TCalculatorService.Iface {

    @Autowired
    CalculatorServiceHandler calculatorServiceHandler;

    @Override
    @RequestMapping(value = "calculator", method = RequestMethod.POST)
    public int calculate(
            @RequestParam(value = "num1") int num1,
            @RequestParam(value = "num2") int num2,
            @RequestParam(value = "op") TOperation op) throws TException {
        return calculatorServiceHandler.calculate(num1, num2, op);
    }

}