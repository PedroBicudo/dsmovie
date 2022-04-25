package com.devsuperior.dsmovie.rest.controller;

import com.devsuperior.dsmovie.rest.dto.MovieDTO;
import com.devsuperior.dsmovie.rest.dto.ScoreDTO;
import com.devsuperior.dsmovie.model.services.ScoreService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/scores")
@Api
public class ScoreController {

    @Autowired
    private ScoreService service;

    @ApiOperation("Add or update a score")
    @ApiResponses({
            @ApiResponse(code = 404, message = "Movie not found"),
            @ApiResponse(code = 200, message = "Score successfully registered")
    })
    @PutMapping
    public MovieDTO saveScore(
            @ApiParam("User's score") @RequestBody @Valid ScoreDTO scoreDTO
    ) {
        MovieDTO movieDTO = service.saveScore(scoreDTO);

        return movieDTO;
    }
}
