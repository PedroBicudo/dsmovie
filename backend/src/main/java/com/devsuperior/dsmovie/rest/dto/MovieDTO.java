package com.devsuperior.dsmovie.rest.dto;

import com.devsuperior.dsmovie.model.entities.Movie;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieDTO {

    private Long id;
    private String title;
    private Double score;
    private Integer totalReviews;
    private String image;

    public MovieDTO(Movie movie) {
        this.id = movie.getId();
        this.title = movie.getTitle();
        this.score = movie.getScore();
        this.totalReviews = movie.getTotalReviews();
        this.image = movie.getImage();
    }

}
