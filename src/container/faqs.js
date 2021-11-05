import React from 'react';
import { Accordian } from '../components';
import { Item } from '../components/accordian/styles/accordian';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export  function FaqsContainer() {
    return (
       <Accordian>
           <Accordian.Title>Frequently Asked Question</Accordian.Title>
           {faqsData.map(Item =>
            <Accordian.Item key={Item.id}>
                <Accordian.Header>{Item.header}</Accordian.Header>
                <Accordian.Body>{Item.body}</Accordian.Body>
            </Accordian.Item>
            )}
           <Accordian.Item/>
           <OptForm>
               <OptForm.Input placeholder="Email adddress"/>
               <OptForm.Button>Try it now</OptForm.Button>
               <OptForm.Break/>
               <OptForm.Text>Ready to watch ? Enter your emal to create or restart your membership </OptForm.Text>
           </OptForm>
       </Accordian>
    )
}
