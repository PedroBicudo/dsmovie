import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
    margin: 2.5rem auto;
    padding: 1.25em;

`;

const Image = styled.img`
    border-radius: 8px 8px 0px 0px;
    width: 100%;
`;

const CardContentContainer = styled.div`
    background-color: var(--color-background-10);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.625em 0.625em 1.25em 0.625em;
    border-radius: 0 0 8px 8px;
    border-left: 1px solid var(--color-border-color-0);
    border-bottom: 1px solid var(--color-border-color-0);
    border-right: 1px solid var(--color-border-color-0);
`;

const Title = styled.h3`
    color: var(--color-text-color-2);
    text-align: center;
    font-size: var(--fs-lg);
    font-weight: 700;
    margin-bottom: 0.625rem;
    min-height: 40px;

`;


const Form = styled.form`
    width: calc(100% - 20px);
    margin-bottom: .8em;
`;

const FormGroup = styled.div`
    margin-bottom: 0.625rem;
`;

const FormGroupLabel = styled.label`
    font-size: var(--fs-sm);
    color: var(--color-text-color-2);
`;

const FormGroupInput = styled.input`
    border-radius: 4px;
    padding: .8em 1em;
    width: 100%;
    border: 1px solid var(--color-border-color-1);
    background-color: transparent;
    color: var(--color-text-color-2);

    :active,
    :focus {
        border: 1px solid var(--color-border-color-1);
        background-color: transparent;
        color: var(--color-text-color-2);
    }

`;

const FormGroupSelect = styled.select`
    border-radius: 4px;
    padding: .8em 1em;
    width: 100%;
    border: 1px solid var(--color-border-color-1);
    background-color: transparent;
    color: var(--color-text-color-2);
    appearance: none;


    :active,
    :focus {
        border: 1px solid var(--color-border-color-1);
        background-color: transparent;
        color: var(--color-text-color-2);
    }

`;


const Button = styled.button`
    background-color: var(--color-background-20);
    border: none;
    font-size: var(--fs-base);
    font-weight: 700;
    height: 40px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: var(--color-white);
    cursor: pointer;
    
    transition: 
        background-color 300ms,
        color 300ms;

    :hover {
        background-color: var(--color-background-30);
        color: var(--color-text-color-0);
    }

`;


export {
    CardContainer,
    Image,
    CardContentContainer,
    Title,
    Button,
    Form,
    FormGroup,
    FormGroupLabel,
    FormGroupInput,
    FormGroupSelect
}