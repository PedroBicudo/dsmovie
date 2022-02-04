package com.devsuperior.dsmovie.rest.advice;

import com.devsuperior.dsmovie.model.exceptions.MovieNotFoundException;
import com.devsuperior.dsmovie.rest.APIError;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice
public class MovieControllerAdvice {

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public APIError handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException e) {
        return new APIError("Invalid argument type");
    }

    @ExceptionHandler(MovieNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public APIError handleMovieNotFoundException(MovieNotFoundException e) {
        return new APIError(e.getMessage());
    }
}
