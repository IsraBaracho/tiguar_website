import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from 'mdb-react-ui-kit';

//imagems

import aplicacoes from "../../images/produtos/aplicacoes.jpg"

import "./servicesCards.css"

export default function App() {
  return (
    <MDBCard className='serviceCard'>
    <MDBCardBody style={{margin: "0", padding: "0"}}>
        <MDBCardTitle className='txtServiceCard'>Aplicações <br/>Web</MDBCardTitle>
    </MDBCardBody> 
    <MDBCardImage className='serviceImage' src={aplicacoes} position='top' alt='...' />      
    </MDBCard>
  );
}