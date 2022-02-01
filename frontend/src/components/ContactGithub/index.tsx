import React from "react";
import {ReactComponent as GithubIcon} from "assets/img/github-icon.svg";
import { ContactGithubLink, ContactGithubName, ContactGithubSvgWrapper } from "./styles";
import { Flex } from "styles/layouts/Flex";


const ContactGithub: React.FC = () => {
    return (
        <ContactGithubLink 
            href="https://github.com/PedroBicudo" 
            target="_blank" 
            rel="noreferrer"
        >
            <ContactGithubContent/>
        </ContactGithubLink>
    );
}

const ContactGithubContent: React.FC = () => {
    return (
        <Flex alignItems="center" gap={.5}>
            <ContactGithubSvgWrapper>
                <GithubIcon/>
            </ContactGithubSvgWrapper>
            <ContactGithubName>PedroBicudo</ContactGithubName>        
        </Flex>
    );
}

export default ContactGithub;