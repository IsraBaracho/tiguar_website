import * as React from "react"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import "../styles/index.css"

//components

import logo from '../images/logos/logo.svg';
import video from '../videos/Luminous_Luxury.mp4';
import CardOne from "../components/cards/cardOne"
import CardTwo from "../components/cards/cardTwo"
import CardTwin from "../components/cards/cardThree"


const IndexPage = () => {
  return (
    <>
    <MDBRow className="firstRow" >
          <video autoPlay loop muted style={{margin: "0", padding: "0", height: "600px", width: "100%", objectFit: "cover"}}>
            <source src={video} type="video/mp4" />
          </video>
          <MDBRow className="content">
            <MDBCol sm={12} md= "3" offsetMd={1} className="btnGroupMenu">
              <MDBBtn className="btnMenu">Aplicativos Android</MDBBtn>
              <MDBBtn className="btnMenu">Websites</MDBBtn>
              <MDBBtn className="btnMenu">Consultória</MDBBtn>
              <MDBBtn className="btnMenu">Entre em contato</MDBBtn>
            </MDBCol>
            <MDBCol sm={12} md= "6">
              <img src={logo} className="w-100" alt="" />
            </MDBCol>
          </MDBRow>      
    </MDBRow>

    <MDBRow className="d-flex align-items-center" style={{margin: "0", height: "600px"}}>
      <MDBCol className="cardsColuna" md={10} offsetMd={1}>
        <MDBCol className="colunaCard">
          <CardOne />
        </MDBCol>
        <MDBCol className="colunaCard">
          <CardTwo />
        </MDBCol>
        <MDBCol className="colunaTwoCards" style={{height: "400px"}}>
        <CardTwin />
        </MDBCol>
      </MDBCol>
    </MDBRow>

    <MDBRow style={{margin: "0", height: "600px", backgroundColor: "#640D5F"}}>

    </MDBRow>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Tiguar</title>
