package com.devsuperior.dsmovie.rest.controller;

import com.devsuperior.dsmovie.rest.dto.MovieDTO;
import com.devsuperior.dsmovie.model.services.MovieService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies") // Você só responde em site.com/movies
@Api
public class MovieController {

    @Autowired
    private MovieService service;

    @ApiOperation("Get movies")
    @ApiResponse(code = 200, message = "Found movies")
    @GetMapping
    public Page<MovieDTO> getMovies(
            @ApiParam("Pagination setup") Pageable pageable
    ) {
        return service.findAll(pageable);
    }

    @ApiOperation("Get the specified movie")
    @ApiResponses({
            @ApiResponse(code = 404, message = "Movie not found"),
            @ApiResponse(code = 200, message = "Movie found")
    })
    @GetMapping(value = "/{id}")
    public MovieDTO getMovies(
            @ApiParam("Movie id") @PathVariable(name = "id") Long id
    ) {
        return service.findById(id);
    }



}
