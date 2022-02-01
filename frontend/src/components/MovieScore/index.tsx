import MovieStars from "components/MovieStars";
import React from "react";
import { Flex } from "styles/layouts/Flex";
import { MovieScoreCount, MovieScoreValue } from "./styles";

type Props = {
    score: number;
    totalReviews: number;
}


const MovieScore: React.FC<Props> = ({ score, totalReviews }) => {
    
    return (
        <Flex direction="column" alignItems="center" gap={.25}>
            <MovieScoreValue>
                {
                    score > 0? score.toFixed(1): "-"
                }
            </MovieScoreValue>
            <MovieStars score={score}/>
            <MovieScoreCount>{totalReviews} avaliações</MovieScoreCount>
        </Flex>
    );
};

export default MovieScore;
