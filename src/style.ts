import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;

    grid-template-areas:
        "Header Header Header"
        "Nav Content Content";

    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr;
    grid-gap: 10px;

    height: 100vh;

    @media (max-width: 768px) {
        grid-template-areas:
            "Header"
            "Nav"
            "Content";

        grid-template-columns: 1fr;
        grid-template-rows:
            minmax(54px, auto) /* Header */
            minmax(75px, auto) /* Nav */
            1fr; /* Content */
    }
`;

export const Content = styled.div`
    grid-area: Content;
    height: 100%;
    background-color: lightgray;
`;
