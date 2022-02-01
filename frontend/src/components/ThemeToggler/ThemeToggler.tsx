import React, { useEffect, useState } from "react";
import { ScreenReaderOnly } from "styles/acessibility/ScreenReaderOnly";
import { StyledFieldset, StyledLabel, StyledRadioButton, ToggleAnimation } from "./styles";

const ThemeToggler: React.FC = () => {
    const [isDarkChecked, setIsDarkChecked] = useState(true);

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if (theme === "light") {
            document.body.classList.toggle("light-theme");
            setIsDarkChecked(false);
        };

    }, []);

    const onToggleTheme = () => {
        document.body.classList.toggle("light-theme");
        if (!isDarkChecked) {
            localStorage.removeItem("theme");
        
        } else {
            localStorage.setItem("theme", "light");
        
        }
        setIsDarkChecked(!isDarkChecked);
    }

    return (
        <StyledFieldset>
            <ScreenReaderOnly>
                <legend>Theme toggler</legend>
            </ScreenReaderOnly>
            <ToggleAnimation isDark={isDarkChecked} />

            <Toggler theme="dark" isChecked={isDarkChecked} onChangeEvent={onToggleTheme} />
            <Toggler theme="light" isChecked={!isDarkChecked} onChangeEvent={onToggleTheme} />

        </StyledFieldset>
    );
}

interface TogglerProps {
    theme: string
    isChecked: boolean
    onChangeEvent: Function

}

const Toggler: React.FC<TogglerProps> = (props) => {
    return (
        <>
            <TogglerLabel theme={props.theme} />
            <TogglerInput theme={props.theme} isChecked={props.isChecked} onChangeEvent={props.onChangeEvent} />
        </>
    );
}

interface TogglerLabelProps {
    theme: string;
}

const TogglerLabel: React.FC<TogglerLabelProps> = (props) => {
    return (
        <ScreenReaderOnly>
            <StyledLabel
                htmlFor={`toggle-${props.theme}`}
            >
                    Toggle to {props.theme} theme
            </StyledLabel>
        </ScreenReaderOnly>
    );
}

interface TogglerInputProps {
    theme: string;
    isChecked: boolean;
    onChangeEvent: Function
}

const TogglerInput: React.FC<TogglerInputProps> = (props) => {
    return (
        <StyledRadioButton
            type="radio"
            name="toggler" 
            id={`toggle-${props.theme}`}
            checked={props.isChecked}
            onChange={() => props.onChangeEvent()}
        />
    );
}


export default ThemeToggler;


