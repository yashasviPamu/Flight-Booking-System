package com.casestudy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableEurekaClient
@SpringBootApplication
@EnableSwagger2
public class FlightFareApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightFareApplication.class, args);
	}
	
	@Bean
	@LoadBalanced
    public RestTemplate restTemplate()
	{
		return new RestTemplate();
	}

}
