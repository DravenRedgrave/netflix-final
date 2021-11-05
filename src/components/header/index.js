import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {Background,Container,Logo,ButtomLink} from './styles/header'

export default function Header({bg=true, children,...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background>: children
}

Header.Frame = function HeaderFrame({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.ButtomLink = function HeaderButtomLink({children,...restProps}){
    return <ButtomLink {...restProps}>{children}</ButtomLink>;
};


Header.Logo = function HeaderLogo({ to,...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}