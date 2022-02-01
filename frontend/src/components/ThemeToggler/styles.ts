import styled from "styled-components";

const StyledFieldset = styled.fieldset`
    position: relative;
    padding: .25em .25em;
    width: 48px;
    height: 24px;
    border-radius: 32px;
    background-color: var(--color-background-10);
    border: none;
`;

const StyledLabel = styled.label`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: -1;
`;


interface ToggleAnimationProps {
    isDark: boolean
}

const ToggleAnimation = styled.div<ToggleAnimationProps>`
    background-color: var(--color-background-20);
    border-radius: 32px;
    width: 16px;
    height: 16px;
    transition: transform 300ms;
    transform: ${props => props.isDark? "translateX(24px)": "translateX(0px)"};
`;


const StyledRadioButton = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    :checked {
        z-index: -2;
    }

`;

export {
    StyledFieldset,
    StyledLabel,
    ToggleAnimation,
    StyledRadioButton
}