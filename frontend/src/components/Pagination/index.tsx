import React from "react";
import {ReactComponent as Arrow} from "assets/img/arrow-icon.svg";
import './styles.css';
import { MoviePage } from "types/movie";


type Props = {
    moviesPage: MoviePage;
    onChangePagination: Function;
}


const Pagination: React.FC<Props> = ({ moviesPage, onChangePagination }) => {

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button 
                    className="dsmovie-pagination-button" 
                    disabled={moviesPage.first}
                    onClick={() => onChangePagination(moviesPage.number-1)}
                    >
                    <Arrow />
                </button>
                <p>{`${moviesPage.number+1} de ${moviesPage.totalPages}`}</p>
                <button 
                    className="dsmovie-pagination-button" 
                    disabled={moviesPage.last} 
                    onClick={() => onChangePagination(moviesPage.number+1)}
                    >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}


export default Pagination;