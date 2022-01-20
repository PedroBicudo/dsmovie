import React from "react";
import {ReactComponent as GithubIcon} from "assets/img/github-icon.svg";
import "./styles.css";


const ContactGithub: React.FC = () => {
    return (
        <a className="dsmovie-contact-github" href="https://github.com/PedroBicudo" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-github__content">
                    <GithubIcon className="dsmovie-contact-github__icon"/>
                    <p className="dsmovie-contact-github__name d-none d-md-inline-block">/PedroBicudo</p>
            </div>
        </a>
    );    
}

export default ContactGithub;