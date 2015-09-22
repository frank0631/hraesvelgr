package com.frank0631.huginn.servlet;

import com.frank0631.huginn.echo.EchoServiceHandler;
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
public class EchoServlet {

    @Bean
    public ServletRegistrationBean echo(TProtocolFactory protocolFactory, EchoServiceHandler handler) {
        ServletRegistrationBean echoServletRegisteration = new ServletRegistrationBean();
        Servlet echoServlet = new TServlet(new com.frank0631.nidhog.echo.TEchoService.Processor<EchoServiceHandler>(handler), protocolFactory);
        ArrayList<String> thriftUrl = new ArrayList<String>();
        thriftUrl.add("/thrift/echo/*");
        echoServletRegisteration.setServlet(echoServlet);
        echoServletRegisteration.setName("echoServlet");
        echoServletRegisteration.setUrlMappings(thriftUrl);
        return echoServletRegisteration;
    }
}
