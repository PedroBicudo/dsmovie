package com.devsuperior.dsmovie.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScoreDTO {
    private Long movieId;
    private String email;
    private Double score;
}
