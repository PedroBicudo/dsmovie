import MovieStars from "components/MovieStars";
import React from "react";
import "./styles.css";

const MovieScore: React.FC = () => {
    let score = 3.5;
    let count=100;

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">
                {score > 0 &&
                    score.toFixed(1)
                }

                {score === 0 && 
                    "-"
                }
            </p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
};

export default MovieScore;
