package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.Movie;

public class MovieDTO {

    private Long id;
    private String title;
    private Double score;
    private Integer totalReviews;
    private String image;

    public MovieDTO() {
    }

    public MovieDTO(Long id, String title, Double score, Integer totalReviews, String image) {
        this.id = id;
        this.title = title;
        this.score = score;
        this.totalReviews = totalReviews;
        this.image = image;
    }

    public MovieDTO(Movie movie) {
        this.id = movie.getId();
        this.title = movie.getTitle();
        this.score = movie.getScore();
        this.totalReviews = movie.getTotalReviews();
        this.image = movie.getImage();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Integer getTotalReviews() {
        return totalReviews;
    }

    public void setTotalReviews(Integer totalReviews) {
        this.totalReviews = totalReviews;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
