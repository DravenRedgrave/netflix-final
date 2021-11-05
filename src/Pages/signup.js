import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import * as ROUTES from '../constants/router';

export default function Signup() {

    const history = useHistory('');
    const firebase = useContext(FirebaseContext);
    const [firstName,setFirstName] = useState('');
    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const isInvalid = firstName === '' || password === '' || emailAddress ==='';
    const handleSignUp = (event) =>{
        event.preventDefault();

        return firebase
        .auth()
        .createUserWithEmailAndPassword( emailAddress,password)
        .then((result) =>
          result.user
            .updateProfile({
              displayName: firstName,
              photoURL: Math.floor(Math.random() * 5) + 1,
            })
            .then(() => {
              history.push(ROUTES.BROWSE);
            })
        )
        .catch((error) => {
          setFirstName('');
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        });
    };
    return (
        <>
        <HeaderContainer>
            <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignUp} method="POST" >
                <Form.Input placeholder="First Name" value={firstName} onChange={({target})=>setFirstName(target.value)}/>
                <Form.Input placeholder="Email address" value={emailAddress} onChange={({target})=>setEmailAddress(target.value)}/>
                <Form.Input type="Password" autoComplete="off" placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)}/>
            <Form.Submit disabled={isInvalid} type="Submit">
                Sign Up
            </Form.Submit>
            </Form.Base>
            <Form.Text>
                 Already in User ? <Form.Link to="/signin">SignIn now</Form.Link>
            </Form.Text>
            <Form.TextSmall>This is protected by Google reCaptcha ensure youre not  a bot learn more</Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}
