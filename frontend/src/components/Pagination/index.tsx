import React from "react";
import {ReactComponent as Arrow} from "assets/img/arrow-icon.svg";
import { MoviePage } from "types/movie";
import { Flex } from "styles/layouts/Flex";
import { ArrowWrapper, PaginationButton, PaginationContainer, PaginationText } from "./styles";


type Props = {
    moviesPage: MoviePage;
    onChangePagination: Function;
}


const Pagination: React.FC<Props> = ({ moviesPage, onChangePagination }) => {

    return (
        <PaginationContainer>
            <Flex gap={0} justify="space-between" alignItems="center">
                <PaginationButton
                    disabled={moviesPage.first}
                    onClick={() => onChangePagination(moviesPage.number-1)}
                    >
                        <ArrowWrapper rotateToRight>
                            <Flex gap={0} alignItems="center" justify="center">
                                <Arrow />
                            </Flex>
                        </ArrowWrapper>
                </PaginationButton>
                
                <PaginationText>{`${moviesPage.number+1} de ${moviesPage.totalPages}`}</PaginationText>
                
                <PaginationButton
                    disabled={moviesPage.last} 
                    onClick={() => onChangePagination(moviesPage.number+1)}
                    >
                        <ArrowWrapper rotateToRight={false}>
                            <Flex gap={0} alignItems="center" justify="center">
                                <Arrow />
                            </Flex>
                        </ArrowWrapper>                        
                </PaginationButton>
            </Flex>
        </PaginationContainer>
    );
}


export default Pagination;