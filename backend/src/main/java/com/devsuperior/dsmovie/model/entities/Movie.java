package com.devsuperior.dsmovie.model.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_movie")
@Getter
@Setter
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", length = 100)
    private String title;

    @Column(name = "score")
    private Double score;

    @Column(name = "count")
    private Integer totalReviews;

    @Column(name = "image")
    private String image;

    @OneToMany(mappedBy = "id.movie")
    private Set<Score> scores = new HashSet<>();

    public Movie(Long id, String title, Double score, Integer totalReviews, String image) {
        this.id = id;
        this.title = title;
        this.score = score;
        this.totalReviews = totalReviews;
        this.image = image;
    }

}
