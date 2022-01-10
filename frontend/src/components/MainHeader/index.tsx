import Navbar from "components/Navbar";
import React from "react";
import "./styles.css";

const MainHeader: React.FC = () => {
    return (
        <header className="main-header">
            <Navbar />
        </header>
    );
}

export default MainHeader;