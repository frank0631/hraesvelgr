package com.frank0631.muninn;

import com.frank0631.nidhog.book.Book;
import com.frank0631.nidhog.echo.TEchoService;
import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TJSONProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.THttpClient;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TTransportException;

import java.lang.reflect.Field;

public class MuninnApplication {
    private static String Message = "Hello";;
    private static String echoEndpoint = "/echo/";

    private static final int PORT = 9001;

    public static void main(String[] args) {
        try {

            TTransport transport = new THttpClient("http://localhost:" + PORT + echoEndpoint);
            TProtocol protocol = new TJSONProtocol(transport);
            TEchoService.Client client = new TEchoService.Client(protocol);
            transport.open();

            String echo = client.echo(Message);
            transport.close();
            System.out.println(echo);

        } catch (TTransportException e) {
            e.printStackTrace();
        } catch (TException e) {
            e.printStackTrace();
        }
    }

}