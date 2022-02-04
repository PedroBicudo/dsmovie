package com.devsuperior.dsmovie.model.services;

import com.devsuperior.dsmovie.rest.dto.MovieDTO;
import com.devsuperior.dsmovie.model.entities.Movie;
import com.devsuperior.dsmovie.model.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable) {
        Page<Movie> movies = repository.findAll(pageable);
        Page<MovieDTO> moviesDTO = movies.map(movie -> new MovieDTO(movie));

        return moviesDTO;
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Optional<Movie> movieOptional = repository.findById(id);
        MovieDTO movieDTO = new MovieDTO(movieOptional.get());
        return movieDTO;

    }

}
