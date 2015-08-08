package com.frank0631.huginn.calculator;

import com.frank0631.nidhog.calculator.TOperation;
import org.apache.thrift.TException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api")
public class CalculatorServiceController {

    @Autowired
    CalculatorServiceHandler calculatorServiceHandler;

    @RequestMapping(value = "calculator", method = RequestMethod.POST)
    public
    @ResponseBody
    Map<String, Integer> calculate(
            @RequestParam(value = "num1") int num1,
            @RequestParam(value = "num2") int num2,
            @RequestParam(value = "op") TOperation op) throws TException {
        Integer result = calculatorServiceHandler.calculate(num1, num2, op);
        Map<String, Integer> jsonMap = new HashMap<String, Integer>();
        jsonMap.put("result", result);
        return jsonMap;
    }

}