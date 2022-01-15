import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


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

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />

            <div className="container-fluid mt-3">
                <div className="row justify-content-center gap-4">
                    {moviesPage.content.map(movie => 
                    
                        <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3">
                            <MovieCard movie={movie}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;