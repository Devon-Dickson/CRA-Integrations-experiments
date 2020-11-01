import styled from "styled-components";

export const Header = styled.header`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        display: inline-block;
        vertical-align: top;
    }

    h1 {
        font-weight: 900;
        font-size: 20px;
        line-height: 1;
        margin: 6px 0 6px 10px;
        display: inline-block;
        vertical-align: top;
    }

    button + button {
        margin-left: 10px;
    }
`;

export const Nav = styled.nav`
    ul {
        display: flex;
        padding: 0;
        margin: 0;
        justify-content: center;
    }
`;
