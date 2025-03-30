import React, { useEffect, useState } from 'react';
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
import Carousel from "../components/carousel/carousel"
import CarouselEssencias from "../components/carousel/carouselEssencias"
import CarouselEssenciasMobile from "../components/carousel/carouselEssenciasMobile"
import CardAndroid from "../components/cards/android"
import CardWebsites from "../components/cards/websites"
import CardAplicacoes from "../components/cards/aplicacoesWeb"
import CardConsultoria from "../components/cards/consultoria"
import CarouselServices from "../components/carousel/carouselServices"
import FormularioContato from "../components/formulario/formulario"
import People from "../images/pessoa_contato.svg"

const IndexPage = () => {

  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Executa apenas no cliente
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    }, []);


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

    <MDBRow className="rowDesktopCards" style={{margin: "0", height: "500px"}}>
      <MDBCol className="cardsColuna" md={10} offsetMd={1}>
        <MDBCol className="colunaCard">
          <CardOne />
        </MDBCol>
        <MDBCol className="colunaCard">
          <CardTwo />
        </MDBCol>
        <MDBCol className="colunaTwoCards">
        <CardTwin />
        </MDBCol>
      </MDBCol>
    </MDBRow>

    

    <MDBRow className="rowMobileCards" style={{margin: "0", height: "500px"}}>
      <Carousel />
    </MDBRow>

    <MDBRow style={{margin: "0", backgroundColor: "#640D5F"}}>
      {isMobile ? <CarouselEssenciasMobile />  : <CarouselEssencias />}
    </MDBRow>
      

    <MDBRow className="rowDesktopServices" style={{margin: "0", height: "600px", backgroundColor: "#EB5B00"}}>
    <MDBCol className="cardsColuna" md={10} offsetMd={1}>
        <MDBCol className="colunaCard">
          <CardAndroid/>
        </MDBCol>
        <MDBCol className="colunaCard">
          <CardWebsites />
        </MDBCol>
        <MDBCol className="colunaCard">
          <CardAplicacoes />
        </MDBCol>
        <MDBCol className="colunaCard">
          <CardConsultoria />
        </MDBCol>
      </MDBCol>      
    </MDBRow>

    <MDBRow className="rowMobileCards" style={{margin: "0", backgroundColor: "#EB5B00"}}>
      <CarouselServices />
    </MDBRow>

    <MDBRow className="imageParallax" style={{margin:"0px", height:"400px"}}>
          
      </MDBRow>

      <MDBRow  style={{margin: "0", backgroundColor: "#FFB200", paddingTop: "3rem"}}>
        <MDBCol className="rowDesktopContact" sm={12} md={10} offsetMd={1}>
          <MDBCol md={5}>
            <FormularioContato />
          </MDBCol>
          <MDBCol className='pessoaContato' md={6} offsetMd={1}>
            <img src={People} style={{width: "90%"}} alt="" />
          </MDBCol>
        </MDBCol>
      </MDBRow>

    
    </>
  )
}

export default IndexPage

export const Head = () => <title>Tiguar</title>
