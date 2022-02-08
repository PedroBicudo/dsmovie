import styled from 'styled-components';

const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    font-size: var(--fs-xxlg);
    color: var(--color-text-color-2);
    text-align: center;
    margin-bottom: 0em;

`;

const Description = styled.p`
    padding: 0em 2em;
    font-size: var(--fs-lg);
    text-align: center;
    color: var(--color-text-color-2);
`;

export {
    Container,
    Title,
    Description
}