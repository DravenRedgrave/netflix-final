import React from 'react'
import { Feature,OptForm } from '../components';
import { FaqsContainer } from "../container/faqs";
import { FooterContainer } from "../container/footer";
import {HeaderContainer} from '../container/header';
import {JumbotronContainer} from '../container/jumbotron';
export default function Home() {
    return (
        <>
        <HeaderContainer>
        <Feature>
            <Feature.Title>Unlimited Films TV programs and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere.Cancel at any time</Feature.SubTitle>
            <OptForm>
            <OptForm.Input placeholder="Email adddress"/>
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break/>
            <OptForm.Text>Ready to watch ? Enter your emal to create or restart your membership </OptForm.Text>
        </OptForm>
        </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
        </>
    )
}
