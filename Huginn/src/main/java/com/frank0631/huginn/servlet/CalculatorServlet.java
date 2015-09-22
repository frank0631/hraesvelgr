package com.frank0631.huginn.servlet;

import com.frank0631.huginn.calculator.CalculatorServiceHandler;
import org.apache.thrift.protocol.TProtocolFactory;
import org.apache.thrift.server.TServlet;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.servlet.Servlet;
import java.util.ArrayList;

/**
 * Created by frank0631 on 9/21/15.
 */
@Component
public class CalculatorServlet {

    @Bean
    public ServletRegistrationBean calculator(TProtocolFactory protocolFactory, CalculatorServiceHandler handler) {
        ServletRegistrationBean calculatorServletRegisteration = new ServletRegistrationBean();
        Servlet calculatorServlet = new TServlet(new com.frank0631.nidhog.calculator.TCalculatorService.Processor<CalculatorServiceHandler>(handler), protocolFactory);
        ArrayList<String> thriftUrl = new ArrayList<String>();
        thriftUrl.add("/thrift/calculator/*");
        calculatorServletRegisteration.setServlet(calculatorServlet);
        calculatorServletRegisteration.setName("calculatorServlet");
        calculatorServletRegisteration.setUrlMappings(thriftUrl);
        return calculatorServletRegisteration;
    }
}
