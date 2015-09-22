package com.frank0631.huginn;

import org.apache.thrift.protocol.TJSONProtocol;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

/**
 * Created by frank0631 on 9/21/15.
 */
@Component
public class TProtocolFactory {

    @Bean
    public org.apache.thrift.protocol.TProtocolFactory tProtocolFactory() {
        //return new TBinaryProtocol.Factory();
        return new TJSONProtocol.Factory();
    }
}
