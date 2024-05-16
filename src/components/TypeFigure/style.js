import styled, {  } from "styled-components";


export const TypeFigureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &.reversed {
        transform: rotate(180deg);
        align-items: start;
    }

    span {
        font-size: 36px;
        ${props => props.color && `color: ${props.color};`}

        &.big {
            font-size: 72px;
        }
    }

    p {
        color: black;
    }
`;