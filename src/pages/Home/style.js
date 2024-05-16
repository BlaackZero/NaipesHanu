import styled from "styled-components";


export const HomeStyles = styled.div`

    .BarajasContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        div {
            max-width: 105px;

            &.stack {
                border: 2px solid #696969;
                border-radius: 8px;
            }
        }
    }

    .buttons {
        margin-top: 5rem;
        display: flex;
        justify-content: center;

        button {
            font-weight: 600;
            border-radius: 8px;
            padding: 8px 12px;
            cursor: pointer;
            border: none;
            color: white;
            background-color: red;
        }
    }
`