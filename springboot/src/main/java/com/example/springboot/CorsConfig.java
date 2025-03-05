package com.example.springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.lang.NonNull;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(@NonNull CorsRegistry registry) {
                registry.addMapping("/**") // Apply CORS settings to all endpoints
                        .allowedOrigins("*") // Allow requests from any domain (change this in production)
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow CRUD methods
                        .allowedHeaders("*"); // Allow all headers
            }
        };
    }
}

