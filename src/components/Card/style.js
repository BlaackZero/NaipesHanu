import styled from "styled-components";


export const CardStyles = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: 160px;
    background-color: #dddddd;
    max-width: 105px;
    border-radius: 10px;

    p {
        margin: 2px 9px;
        font-weight: 600;
        font-size: 16px;
    }

    .upSection {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    .midSection {
        position: absolute;
        top: 25%;
        left: 50%;
        right: 50%;
    }

`