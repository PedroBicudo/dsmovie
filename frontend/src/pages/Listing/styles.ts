import styled from "styled-components";

const CardsGrid = styled.div`
    padding: 1em 0em 4em 0em;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(340px, 340px));
    gap: 2em;
`;

export { CardsGrid };