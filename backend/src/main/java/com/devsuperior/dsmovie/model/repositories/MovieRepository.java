package com.devsuperior.dsmovie.model.repositories;

import com.devsuperior.dsmovie.model.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
