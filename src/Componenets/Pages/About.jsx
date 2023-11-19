import React from 'react'
import { AccordionItem, UncontrolledAccordion,AccordionHeader, AccordionBody, } from 'reactstrap'

const About = () => {
  return (
    <>
    <div className="container my-3">
      <div className="row">
        <div className="col-12">
    <div className="text-center">
      <h1 className='fw-bold py-2'>About</h1>
    </div>
        
  <UncontrolledAccordion 
  defaultOpen={[
    '1',
    '2'
  ]}
  stayOpen
>
  <AccordionItem >
    <AccordionHeader targetId="1" >
      <h4 className='fw-bold'>Our Start Up</h4>
    </AccordionHeader>
    <AccordionBody accordionId="1">
      <strong>
        This is the first item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, officia suscipit. Fuga, ipsam! Odit sint distinctio suscipit error omnis delectus, odio deserunt, neque incidunt libero quasi dolore eligendi eaque temporibus?{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem >
  <AccordionItem className='bg-light'>
    <AccordionHeader targetId="2">
      
    <h4 className='fw-bold'>Bio Graphy</h4>
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <strong>
        This is the second item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi aut fugit quidem, praesentium nesciunt tempora animi natus eius. Minima repellat sed a quaerat esse et sapiente tempora minus labore?{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem className='bg-light'>
    <AccordionHeader targetId="3">
    <h4 className='fw-bold'>History</h4>
    </AccordionHeader>
    <AccordionBody accordionId="3">
      <strong>
        This is the third item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi aut fugit quidem, praesentium nesciunt tempora animi natus eius. Minima repellat sed a quaerat esse et sapiente tempora minus labore?{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
</UncontrolledAccordion>
</div>
      </div>
    </div>
    </>
  )
}

export default About
