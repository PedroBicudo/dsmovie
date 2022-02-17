package com.devsuperior.dsmovie.model.services;

import com.devsuperior.dsmovie.model.exceptions.MovieNotFoundException;
import com.devsuperior.dsmovie.rest.dto.MovieDTO;
import com.devsuperior.dsmovie.rest.dto.ScoreDTO;
import com.devsuperior.dsmovie.model.entities.Movie;
import com.devsuperior.dsmovie.model.entities.Score;
import com.devsuperior.dsmovie.model.entities.ScorePK;
import com.devsuperior.dsmovie.model.entities.User;
import com.devsuperior.dsmovie.model.repositories.MovieRepository;
import com.devsuperior.dsmovie.model.repositories.ScoreRepository;
import com.devsuperior.dsmovie.model.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ScoreService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO scoreDTO) {
        User user = userRepository.findOneByEmail(scoreDTO.getEmail());
        if (user == null) {
            createUserAndScore(scoreDTO);
        } else {
            updateOrAddNewScore(scoreDTO, user);
        }

        Movie movie = findMovieById(scoreDTO.getMovieId());
        return new MovieDTO(movie);
    }

    public void updateOrAddNewScore(ScoreDTO scoreDTO, User user) {
        Movie movie = findMovieById(scoreDTO.getMovieId());
        ScorePK scorePK = new ScorePK();
        scorePK.setUser(user);
        scorePK.setMovie(movie);

        Optional<Score> score = scoreRepository.findById(scorePK);
        if (score.isEmpty()) {
            addScoreAndUpdateMovieScore(scoreDTO, scorePK);

        } else {
            updateUserScoreAndMovieScore(score.get(), scoreDTO);
        }

    }

    private void updateUserScoreAndMovieScore(Score score, ScoreDTO scoreDTO) {
        Movie movie = score.getId().getMovie();

        // (a + b) / total = media
        // a + b = total * media
        double average = movie.getScore() * movie.getTotalReviews();

        // a + b - b = a
        average -= score.getScore();

        // a + b_novo
        average += scoreDTO.getScore();

        // (a + b_novo) / total = media
        average /= movie.getTotalReviews();

        score.setScore(scoreDTO.getScore());
        movie.setScore(average);

    }

    private void createUserAndScore(ScoreDTO scoreDTO) {
        User user = createUser(scoreDTO.getEmail());
        Movie movie = findMovieById(scoreDTO.getMovieId());
        ScorePK scorePK = new ScorePK();
        scorePK.setMovie(movie);
        scorePK.setUser(user);
        addScoreAndUpdateMovieScore(scoreDTO, scorePK);
    }

    private User createUser(String email) {
        User user = new User();
        user.setEmail(email);
        return userRepository.saveAndFlush(user);
    }

    private void addScoreAndUpdateMovieScore(ScoreDTO scoreDTO, ScorePK scorePK) {
        Score score = createScore(scoreDTO,scorePK);
        Movie movie = score.getId().getMovie();

        double average = 0.0;
        for (Score s: movie.getScores()) {
            average += s.getScore();
        }
        average /= movie.getScores().size();

        movie.setTotalReviews(movie.getScores().size());
        movie.setScore(average);

        movieRepository.save(movie);

    }

    private Score createScore(ScoreDTO scoreDTO, ScorePK scorePK) {
        Score score = new Score();
        score.setScore(scoreDTO.getScore());
        score.setId(scorePK);
        return scoreRepository.saveAndFlush(score);
    }

    private Movie findMovieById(Long movieId) {
        return movieRepository
                .findById(movieId)
                .orElseThrow(() -> new MovieNotFoundException());
    }


}
