import styled from "styled-components";

const ListItem = styled.div`
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    ::after {
        z-index: 1;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-black);
        filter: opacity(.9);
        transition: 300ms filter;

    }

    :hover::after {
        filter: opacity(.9);

    }

    @media screen and (min-width: 768px) {
        ::after {
            filter: opacity(.6);
        }
    }

`;

const ListItemImage = styled.img`
    object-fit: cover;
    object-position: center;
    height: 375px;
    width: 100%;
`;

const ListItemContent = styled.div`
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    padding: 0.625em 1.7em 1.25em 1.7em;

    > * {
        width: 100%;
        height: 100%;
    }
`;

const ListItemTitle = styled.h3`
    color: var(--color-white);
    text-align: center;
    font-size: var(--fs-lg);
    font-weight: 700;
    margin-bottom: 0.625rem;
    min-height: 40px;

`;

const ListItemLink = styled.button`
    border: none;
    background-color: var(--color-background-0);
    color: var(--color-text-color-0);
    font-size: var(--fs-base);
    font-weight: 700;
    height: 40px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    transition: 
        background-color 300ms,
        color 300ms; 

    :hover {
        background-color: var(--color-background-30);
        color: var(--color-text-color-1);

    }
`;


export {
    ListItem,
    ListItemImage,
    ListItemContent,
    ListItemTitle,
    ListItemLink
}