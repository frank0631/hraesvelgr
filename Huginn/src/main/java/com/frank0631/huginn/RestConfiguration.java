package com.frank0631.huginn;

import com.frank0631.huginn.customer.CustomerEntity;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

/**
 * Created by frank0631 on 7/20/15.
 */
@Configuration
public class RestConfiguration extends RepositoryRestMvcConfiguration {
    @Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(CustomerEntity.class);
        config.setReturnBodyOnCreate(true);
        config.setReturnBodyOnUpdate(true);
        config.setBaseUri("data/");
    }
}