import React from "react";
import { Link, useLocation } from "wouter";
import * as S from "./style";

type NavLinkProps = {
    children?: string;
    path: string;
};

const NavLink = ({ children, path }: NavLinkProps) => {
    const [location] = useLocation();
    return (
        <Link href={path}>
            <S.NavItem isActive={location === path}>{children}</S.NavItem>
        </Link>
    );
};

export default NavLink;
