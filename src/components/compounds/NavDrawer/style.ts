import styled from "styled-components";

export const Nav = styled.nav`
    background-color: blue;
    color: black;
    grid-area: Nav;
    margin-left: 0.5rem;

    @media (max-width: 768px) {
        margin: 0;
    }
    ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }
`;
