import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router';
import {FirebaseContext} from '../context/firebase';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';
import { Form } from '../components';
import * as ROUTES from '../constants/router';

export default function Signin() {

    const history = useHistory()

    const {firebase} = useContext(FirebaseContext); 

    const [emailAddress,setEmailAddress] = useState('');
    
    const [password,setPassword] = useState('');

    const [error,setError] = useState('');

    const inInvalid = password === '' || emailAddress ==='';

    const handleSignin = (event) =>{
        event.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress,password)
        .then(()=>{
            history.push(ROUTES.BROWSE);
        })
        .catch((error)=>{
            setEmailAddress('');
            setPassword('');
            setError(error.message);
            
        })
    }

    return (
        <>
        <HeaderContainer>
            <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignin} method="POST" >
                <Form.Input placeholder="Email address" value={emailAddress} onChange={({target})=>setEmailAddress(target.value)}/>
                <Form.Input type="Password" autoComplete="off" placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)}/>
            <Form.Submit disabled={inInvalid} type="Submit">
                SignIn
            </Form.Submit>
            </Form.Base>
            <Form.Text>
                 New to Netflix ? <Form.Link to="/signup">SignUp now</Form.Link>
            </Form.Text>
            <Form.TextSmall>This is protected by Google reCaptcha ensure youre not  a bot learn more</Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}
