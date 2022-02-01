import styled from "styled-components";

const ContactGithubLink = styled.a`
    padding: .5em .8em;
`;

const ContactGithubSvgWrapper = styled.div`
    svg {
        display: inline-block;
        width: 24px;
        height: 24px;
    }
`;

const ContactGithubName = styled.p`
    display: none;
    margin: 0;
    font-size: var(--fs-sm);

    ::before {
        content: '/';
    }

    @media screen and (min-width: 768px) {
        display: inline;
    }
`;


export {
    ContactGithubLink,
    ContactGithubSvgWrapper,
    ContactGithubName
}

