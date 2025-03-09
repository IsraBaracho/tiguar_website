import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from 'mdb-react-ui-kit';

//imagems

import consultoria from "../../images/produtos/consultoria.jpg"

import "./servicesCards.css"

export default function App() {
  return (
    <MDBCard className='serviceCard'>
    <MDBCardBody style={{margin: "0", padding: "0"}}>
        <MDBCardTitle className='txtServiceCard'>Consultoria <br/>Digital</MDBCardTitle>
    </MDBCardBody> 
    <MDBCardImage className='serviceImage' src={consultoria} position='top' alt='...' />      
    </MDBCard>
  );
}