package com.example.springboot;

import datadog.trace.api.Trace;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class SpringbootApplication {

	@Trace
	public static void main(String[] args) {
        Dotenv dotenv = Dotenv.load();
        System.setProperty("DB_HOST", dotenv.get("DB_HOST"));
        System.setProperty("DB_USER", dotenv.get("DB_USER"));
        System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
        SpringApplication.run(SpringbootApplication.class, args);
    }
}
