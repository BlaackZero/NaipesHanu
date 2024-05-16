import styled from "styled-components";

export const HeaderContainer = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        object-fit: contain;
    }

    h1 {
        color: red;
        font-weight: 600;
        font-size: 22px;
    }
`