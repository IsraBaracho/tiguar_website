import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from 'mdb-react-ui-kit';

//imagems

import websites from "../../images/produtos/websites.jpg"

import "./servicesCards.css"

export default function App() {
  return (
    <MDBCard className='serviceCard'>
    <MDBCardBody style={{margin: "0", padding: "0"}}>
        <MDBCardTitle className='txtServiceCard'>Websites <br/>Mobile-first</MDBCardTitle>
    </MDBCardBody> 
    <MDBCardImage className='serviceImage' src={websites} position='top' alt='...' />      
    </MDBCard>
  );
}