package com.devsuperior.dsmovie.model.exceptions;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException() {
        super("Movie not found");
    }
}
