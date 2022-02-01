import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
import { CardsGrid } from "./styles";


const Listing: React.FC = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [moviesPage, setMoviesPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true

    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
        .then(reponse => {
            const data = reponse.data as MoviePage;
            
            setMoviesPage(data);
        })
    
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination moviesPage={moviesPage}  onChangePagination={handlePageChange}/>

            <CardsGrid>
                    {moviesPage.content.map(movie => 
                        <div key={movie.id}>
                            <MovieCard movie={movie}/>
                        </div>
                    )}
            </CardsGrid>
        </>
    );
}

export default Listing;