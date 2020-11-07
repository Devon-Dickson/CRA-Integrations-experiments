import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: "Montserrat";
    border-radius: 4px;

    display: flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 8px;

    color: #d50000;
    border-left: 12px solid #d50000;
    padding-left: 20px;
    overflow: hidden;
    max-width: 360px;
    min-width: 240px;
    cursor: pointer;

    transition: 0.15s;
    transition-timing-function: cubic-bezier(0.47, 0, 0.75, 0.72);

    :hover {
        transform: translate3d(0px, -2.5px, 0px);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;
export const Value = styled.div`
    font-size: clamp(2.8em, 4.2vw, 4.2em);
    text-align: right;
`;
export const Subtitle = styled.div`
    font-size: clamp(1.4em, 2.1vw, 2.1em);
    text-align: right;
    max-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Icon = styled.div`
    margin-left: 12px;
    background: #d50000;
    color: white;
    font-size: 2em;
    display: flex;
    align-items: center;
    padding: 4px;

    svg {
        width: clamp(2.1em, 4.2vw, 4.2em);
        height: auto;
    }
`;

export const RawNumber = styled.div``;

export const Percentage = styled.div``;
