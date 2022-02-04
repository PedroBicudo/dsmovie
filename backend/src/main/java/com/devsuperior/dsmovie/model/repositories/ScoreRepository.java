package com.devsuperior.dsmovie.model.repositories;

import com.devsuperior.dsmovie.model.entities.Score;
import com.devsuperior.dsmovie.model.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
