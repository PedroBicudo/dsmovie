package com.devsuperior.dsmovie.controller;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies") // Você só responde em site.com/movies
public class MovieController {

    @Autowired
    private MovieService service;

    @GetMapping
    public Page<MovieDTO> getMovies(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping(value = "/{id}")
    public MovieDTO getMovies(@PathVariable(name = "id") Long id) {
        return service.findById(id);
    }



}
