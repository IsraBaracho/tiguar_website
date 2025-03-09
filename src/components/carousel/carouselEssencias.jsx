import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import BannerOne from "../../images/carousel/Banner_One.svg"
import BannerTwo from "../../images/carousel/Banner_Two.svg"
import BannerThree from "../../images/carousel/Banner_Three.svg"
export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade style={{margin: "0", padding: "0"}}>
      <MDBCarouselItem itemId={1}>
        <img src={BannerOne} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={BannerTwo} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={BannerThree} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}