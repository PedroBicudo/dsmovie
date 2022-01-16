import MovieScore from "components/MovieScore";
import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import "./styles.css";


type Props = {
    movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
        
    return (
        <div className="dsmovie-listing-item">
            <img className="dsmovie-listing-item__image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-listing-item__content">
                <h3 className="dsmovie-listing-item__title">{movie.title}</h3>
                <MovieScore score={movie.score} totalReviews={movie.totalReviews}/>
                
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-listing-item__btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;