import React from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/router'
import logo from '../logo.svg'

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>
                <Header.ButtomLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtomLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
