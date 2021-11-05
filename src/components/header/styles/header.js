import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
`;

export const Frame = styled.div`

`;

export const Container = styled.div`
    display: flex;
    margin:0 56px;
    padding: 18px 0;
    height: 64px;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media(min-width:1000px){
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media(min-width:1449px){
        height: 45px;
        width: 167px;
    }
`;

export const ButtomLink = styled(ReactRouterLink)`
    display: block;
    background-color:#e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border:none;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &hover{
        background-color: #f40612;
    }
`;