import MovieStars from "components/MovieStars";
import React from "react";
import "./styles.css";

type Props = {
    score: number;
    totalReviews: number;
}


const MovieScore: React.FC<Props> = ({ score, totalReviews }) => {
    
    return (
        <div className="dsmovie-score">
            <p className="dsmovie-score__value">
                {
                    score > 0? score.toFixed(1): "-"
                }
            </p>
            <MovieStars score={score}/>
            <p className="dsmovie-score__count">{totalReviews} avaliações</p>
        </div>
    );
};

export default MovieScore;
