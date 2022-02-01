import MovieScore from "components/MovieScore";
import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "styles/layouts/Flex";
import { Movie } from "types/movie";
import { ListItem, ListItemContent, ListItemImage, ListItemLink, ListItemTitle } from "./styles";


type Props = {
    movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
        
    return (
        <ListItem>
            <ListItemImage src={movie.image} alt={movie.title} />
            <ListItemContent>
                <Flex gap={2.8} direction="column" justify="center" alignItems="center"> 
                    <ListItemTitle>{movie.title}</ListItemTitle>
                    <MovieScore score={movie.score} totalReviews={movie.totalReviews}/>

                    <Link to={`/form/${movie.id}`}>
                        <ListItemLink>Avaliar</ListItemLink>
                    </Link>
                </Flex>
            </ListItemContent>
        </ListItem>
    );
}

export default MovieCard;