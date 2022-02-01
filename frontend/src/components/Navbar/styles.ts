import styled from "styled-components";

const Nav = styled.nav`
    color: var(--color-white);
    padding: 0.875em 1em;


    @media screen and (min-width: 768px) {
        padding: 0.875em 8em;  
    }
`;

const NavTitle = styled.h1`
    margin: 0;
    font-weight: 700;
    font-size: var(--fs-xlg);  
`;


export {
    Nav,
    NavTitle
};