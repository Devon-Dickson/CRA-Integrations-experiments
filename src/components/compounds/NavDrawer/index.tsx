import React from "react";
import { RouteProps } from "RouteConfig";
import NavLink from "components/Molecules/NavLink";
import * as S from "./style";

type NavDrawerProps = {
    routes: Array<RouteProps>;
};

const NavDrawer = ({ routes }: NavDrawerProps) => {
    return (
        <S.Nav>
            <ul>
                {routes.map(({ path, label }) => (
                    <NavLink key={`${label}-${path}`} path={path}>
                        {label}
                    </NavLink>
                ))}
            </ul>
        </S.Nav>
    );
};

export default NavDrawer;
