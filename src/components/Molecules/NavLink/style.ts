import styled, { css } from "styled-components";

type NavItemProps = {
    readonly isActive?: boolean;
};

export const NavItem = styled.li<NavItemProps>`
    font-weight: 600;
    text-align: center;
    padding: 20px;
    margin: 0;
    list-style-type: none;
    cursor: pointer;
    ${(props) =>
        props.isActive
            ? css`
                  border-top: 4px solid purple;
              `
            : css`
                  border-top: 4px solid transparent;
              `}

    :hover {
        ${(props) =>
            !props.isActive &&
            css`
                border-top: 4px solid lightpink;
            `}
`;
