package com.andrewwillette.personalwebsite.controllers;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
class HomeController {
    private final Logger log = LoggerFactory.getLogger(HomeController.class);

    @RequestMapping(value="/")
    public String index() {
        return "index";
    }

    @RequestMapping(value="/music")
    public String music() {
       return "index";
    }

    @RequestMapping(value="/resume")
    public String resume() {
        return "index";
    }

    //TODO: Burn this
    @RequestMapping(value="/test")
    public Object test() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        HashMap jsonObject = new HashMap<>();
        jsonObject.put("samplekey", "sampleValue");
        Object toReturn = objectMapper.writeValueAsString(jsonObject);
        return toReturn;
    }
}