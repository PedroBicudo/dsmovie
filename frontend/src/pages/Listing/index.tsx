import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React from "react";
import { BASE_URL } from "utils/requests";


const Listing: React.FC = () => {

    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(reponse => {
            console.log(reponse.data);
        })

    return (
        <>
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