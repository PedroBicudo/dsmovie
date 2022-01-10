import React from "react";
import {ReactComponent as StarFull} from "assets/img/full-star-icon.svg";
import {ReactComponent as StarHalf} from "assets/img/half-star-icon.svg";
import {ReactComponent as StarEmpty} from "assets/img/empty-star-icon.svg";
import './styles.css';

const MovieStars: React.FC = () => {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
};

export default MovieStars;
