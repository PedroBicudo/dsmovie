package com.devsuperior.dsmovie.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScoreDTO {

    @NotNull(message = "Movie is required")
    private Long movieId;

    @NotEmpty(message = "Email is required")
    @Email(message = "Inform a valid email")
    private String email;

    @NotNull(message = "Movie score is required")
    private Double score;
}
