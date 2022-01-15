import React from "react";
import {ReactComponent as StarFull} from "assets/img/full-star-icon.svg";
import {ReactComponent as StarHalf} from "assets/img/half-star-icon.svg";
import {ReactComponent as StarEmpty} from "assets/img/empty-star-icon.svg";
import './styles.css';

type MovieStarsProps = {
    score: number;
}

const MovieStars: React.FC<MovieStarsProps> = ({ score }) => {
    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[1]} />
            <Star fill={fills[2]} />
            <Star fill={fills[3]} />
            <Star fill={fills[4]} />
        </div>
    );
};


type StarProps = {
    fill: number;
}

const Star: React.FC<StarProps> = ({ fill }) => {
    switch (fill) {
        case 0:
            return <StarEmpty />
        case 1:
            return <StarFull />
        default:
            return <StarHalf />    
    }
}

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }

export default MovieStars;
