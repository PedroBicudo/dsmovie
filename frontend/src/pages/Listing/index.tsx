import MovieCard from "components/MovieCard";
import MovieScore from "components/MovieScore";
import Pagination from "components/Pagination";
import React from "react";


const Listing: React.FC = () => {
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