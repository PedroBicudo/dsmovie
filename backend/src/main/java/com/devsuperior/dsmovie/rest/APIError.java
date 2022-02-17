package com.devsuperior.dsmovie.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class APIError {
    private List<String> errors;

    public APIError(String error) {
        errors = Arrays.asList(error);
    }
}
