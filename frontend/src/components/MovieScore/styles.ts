import styled from "styled-components";

const MovieScoreValue = styled.p`
    margin: 0;
    color: var(--color-gold);
    font-size: var(--fs-lg);
    font-weight: 700;
`;

const MovieScoreCount = styled.p`
    font-size: var(--fs-sm);
    color: var(--color-white);
    margin: 0.25rem 0 0.625rem 0;
`;

export {
    MovieScoreValue,
    MovieScoreCount
}