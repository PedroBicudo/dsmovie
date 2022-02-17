package com.devsuperior.dsmovie.rest.controller;

import com.devsuperior.dsmovie.rest.dto.MovieDTO;
import com.devsuperior.dsmovie.rest.dto.ScoreDTO;
import com.devsuperior.dsmovie.model.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore(@RequestBody @Valid ScoreDTO scoreDTO) {
        MovieDTO movieDTO = service.saveScore(scoreDTO);

        return movieDTO;
    }
}
