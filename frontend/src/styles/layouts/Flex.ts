import styled from "styled-components";

interface FlexProps {
    direction?: FlexDirection
    justify?: FlexJustify
    alignItems?: FlexAlignItems
    gap: number
}

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type FlexJustify = "flex-start" | "flex-end" | "space-between" | "space-around" | "center";
type FlexAlignItems = "flex-start" | "flex-end" | "center";

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.direction ?? "row"};
    justify-content: ${props => props.justify ?? "flex-start"};
    align-items: ${props => props.alignItems ?? "center"};
    gap: ${props => `${props.gap}em`};
`;

export {Flex};