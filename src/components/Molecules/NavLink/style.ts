import styled, { css } from "styled-components";

type NavItemProps = {
    readonly isActive?: boolean;
};

export const NavItem = styled.li<NavItemProps>`
    color: white;
    font-weight: 600;
    text-align: center;
    padding: 20px;
    margin: 0;
    list-style-type: none;
    cursor: pointer;
    ${(props) =>
        props.isActive
            ? css`
                  /* border-top: 4px solid purple; */
                  color: white;
              `
            : css`
                  /* border-top: 4px solid transparent; */
                  color: #6bc8b7;
              `}

    :hover {
        ${(props) =>
            !props.isActive &&
            css`
                /* border-top: 4px solid lightpink; */
                color: white;
            `}
`;
