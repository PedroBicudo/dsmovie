import styled from "styled-components";

const PaginationContainer = styled.div`
    display: inline-block;
    margin: 0 auto;
    width: 180px;
    padding: 1.06em 0;
`;

const PaginationButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--color-background-20);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    :disabled {
        filter: opacity(.4);
        cursor: unset;
    }
`;

interface ArrowWrapperProps {
    rotateToRight: boolean
}

const ArrowWrapper = styled.div<ArrowWrapperProps>`
    svg {
        fill: var(--color-white);
        transform: ${props => !props.rotateToRight? "rotate(180deg)": "rotate(0deg)"};
    }
`;

const PaginationText = styled.p`
    margin: 0;
    font-size: var(--fs-sm);
    color: var(--color-text-color-2);

`;

export {
    PaginationContainer,
    PaginationButton,
    ArrowWrapper,
    PaginationText
}