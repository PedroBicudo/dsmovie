import React, { useEffect, useState } from "react";
import "./styles.css";

const ThemeToggler: React.FC = () => {
    const [isDarkChecked, setIsDarkChecked] = useState(true);

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if (theme === "light") {
            onToggleTheme();
        }

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
        <fieldset className="dsmovie-theme-toggler">
            <legend className="sr-only">Theme toggler</legend>
            <ToggleAnimation isDarkTheme={isDarkChecked} />

            <Toggler theme="dark" isChecked={isDarkChecked} onChangeEvent={onToggleTheme} />
            <Toggler theme="light" isChecked={!isDarkChecked} onChangeEvent={onToggleTheme} />

        </fieldset>
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
        <label 
            className="dsmovie-toggler__label"
            htmlFor={`toggle-${props.theme}`}
        >
            <span className="sr-only">Toggle to {props.theme} theme</span>
        </label>

    );
}

interface TogglerInputProps {
    theme: string;
    isChecked: boolean;
    onChangeEvent: Function
}

const TogglerInput: React.FC<TogglerInputProps> = (props) => {
    return (
        <input 
            type="radio" 
            name="toggler" 
            id={`toggle-${props.theme}`}
            className="dsmovie-toggler__input"
            checked={props.isChecked}
            onChange={() => props.onChangeEvent()}
        />
    );
}

interface ToggleAnimationProps {
    isDarkTheme: boolean
}

const ToggleAnimation: React.FC<ToggleAnimationProps> = (props) => {
    if (props.isDarkTheme) {
        return <div className="theme-toggler-animation go-right"></div>
    
    } else {
        return <div className="theme-toggler-animation"></div>
    
    }

}

export default ThemeToggler;


