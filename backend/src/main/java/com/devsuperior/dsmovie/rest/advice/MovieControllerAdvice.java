package com.devsuperior.dsmovie.rest.advice;

import com.devsuperior.dsmovie.model.exceptions.MovieNotFoundException;
import com.devsuperior.dsmovie.rest.APIError;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.List;
import java.util.stream.Collectors;

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

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public APIError handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        List<String> errors = e
                .getBindingResult()
                .getAllErrors()
                .stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());

        return new APIError(errors);
    }
}
