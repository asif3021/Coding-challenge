package com.example.assessmentproductservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient //Enable EurekaClient
public class AssessmentProductServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssessmentProductServiceApplication.class, args);
	}

}
