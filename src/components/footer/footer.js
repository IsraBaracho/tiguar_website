import * as React from "react"
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'

const Footer = () => {
  return (
    <MDBFooter className='footer-container' style={{ backgroundColor: '#640D5F' }}>
      <MDBContainer fluid>
        <MDBRow className='footer-content'>
          {/* Add your footer content here */}
          <MDBCol md='4'>
            <h5 className='text-white'>Tiguar</h5>
            {/* Add company info */}
          </MDBCol>
          <MDBCol md='4'>
            <h5 className='text-white'>Links</h5>
            {/* Add navigation links */}
          </MDBCol>
          <MDBCol md='4'>
            <h5 className='text-white'>Contact</h5>
            {/* Add contact information */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer
