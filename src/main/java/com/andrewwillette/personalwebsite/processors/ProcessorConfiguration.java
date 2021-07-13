package com.andrewwillette.personalwebsite.processors;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProcessorConfiguration {
    @Bean
    public PostProcessorBean postProcessorBean() {
        return new PostProcessorBean();
    }
}
