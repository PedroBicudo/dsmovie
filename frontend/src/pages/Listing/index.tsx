import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


const Listing: React.FC = () => {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(reponse => {
            const data = reponse.data as MoviePage;
            console.log(data);
            setPageNumber(data.number)
        })
    
    }, []);


    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />

            <div className="container-fluid mt-3">
                <div className="row justify-content-center gap-4">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;