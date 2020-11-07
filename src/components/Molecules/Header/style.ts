import styled from "styled-components";

export const Header = styled.header`
    grid-area: Header;
    font-family: "Montserrat", "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #07a287;

    svg {
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
    }

    h1 {
        font-weight: 900;
        font-size: 20px;
        line-height: 1;
        margin: 6px 0 6px 10px;
        display: inline-block;
        vertical-align: top;
        color: white;
    }

    button + button {
        margin-left: 10px;
    }
`;

export const Nav = styled.nav`
    ul {
        margin-block: 0;
        display: flex;
        padding: 0;
        justify-content: center;

        @media (max-width: 768px) {
            display: none;
        }
    }
`;
