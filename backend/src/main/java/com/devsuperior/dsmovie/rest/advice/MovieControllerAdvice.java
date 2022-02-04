package com.devsuperior.dsmovie.rest.advice;

import com.devsuperior.dsmovie.model.exceptions.MovieNotFoundException;
import com.devsuperior.dsmovie.rest.APIError;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MovieControllerAdvice {

    @ExceptionHandler(MovieNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public APIError handleMovieNotFoundException(MovieNotFoundException e) {
        return new APIError(e.getMessage());
    }
}
