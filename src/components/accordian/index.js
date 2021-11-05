import React,{useState,useContext,createContext} from 'react'
import { Container, Title,Fame,Inner,Header,Body,Item } from './styles/accordian';

const ToggleContext = createContext();

export default function Accordian({children, ...restProps}) {
    return (
        <Container {...restProps} >
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordian.Title = function AccordianTitle({children,...restProps}){
    return <Title {...restProps} >{children}</Title>
};

Accordian.Fame = function AccordianFame({children,...restProps}){
    return <Fame {...restProps} >{children}</Fame>
};

Accordian.Item = function AccordianItem({children,...restProps}){
    const [toogleShow,setToogleShow] = useState(false);
    return (
    <ToggleContext.Provider value={{toogleShow,setToogleShow}}> 
        <Item {...restProps} >{children}</Item>
    </ToggleContext.Provider>
    )
 
};

Accordian.Header = function AccordianHeader({children,...restProps}){
    const {toogleShow,setToogleShow} = useContext(ToggleContext);
    return <Header  onClick={() => setToogleShow((toogleShow) => !toogleShow)}  {...restProps} >{children}{toogleShow ? (<img src="/images/icons/close-slim.png" alt="Close"/>):(
        <img src="/images/icons/add.png" alt="Open"/>
    )} </Header>
};

Accordian.Body = function AccordianBody ({children,...restProps}){
    const {toogleShow} = useContext(ToggleContext);
    return toogleShow ?<Body {...restProps} >{children}</Body>:null;
}