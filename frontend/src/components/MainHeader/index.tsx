import Navbar from "components/Navbar";
import React from "react";
import { StyledHeader } from "./styles";

const MainHeader: React.FC = () => {
    return (
        <StyledHeader>
            <Navbar />
        </StyledHeader>
    );
}

export default MainHeader;