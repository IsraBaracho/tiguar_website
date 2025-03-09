import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from 'mdb-react-ui-kit';

//imagems

import android from "../../images/produtos/android.jpg"

import "./servicesCards.css"

export default function App() {
  return (
    <MDBCard className='serviceCard'>
    <MDBCardBody style={{margin: "0", padding: "0"}}>
        <MDBCardTitle className='txtServiceCard'>Aplicativos <br/>Android</MDBCardTitle>
    </MDBCardBody> 
    <MDBCardImage className='serviceImage' src={android} position='top' alt='...' />      
    </MDBCard>
  );
}