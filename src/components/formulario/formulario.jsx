import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { MDBInput, MDBTextArea, MDBBtn } from "mdb-react-ui-kit"
import './formulario.css';

const FormularioContato = () => {  
  const form = useRef();
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [buttonText, setButtonText] = useState('ENVIAR E-MAIL');
  const [buttonColor, setButtonColor] = useState('null');
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#2A5F9E');


  const handleTokenChange = (token) => {
    setToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('', '', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (token) {
      sendEmail(event);
      form.current.reset();
      setButtonText('Enviado');
      setButtonColor('#D17190');
      setButtonBackgroundColor('transparent');
      
    } else {
      setErrorMessage('Por favor, verifique o ReCAPTCHA');
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

    
    


    return(      
        
        <div>
                <div>
                <h2 style={{width:"100%"}} className="subTituloSeccao">Entre em contato</h2>
                </div>
                <form ref={form} onSubmit={handleSubmit}>
                <div className='inputContato'>
                    <MDBInput                    
                    label='Nome'
                    name='Nome'
                    type='text' />
                </div>
                <div className='inputContato'>            
                    <MDBInput 
                    label='Assunto'
                    name='Assunto' 
                    type='text' />
                </div>
                <div className='inputContato' >
                    <MDBInput 
                    label='E-mail'
                    name='Email' 
                    id='typeEmail' 
                    type='Email'/>
                </div>
                <div className='inputContato' >
                    <MDBInput 
                    label='Telefone'
                    name='Telefone' 
                    id='typePhone' 
                    type='tel'/>
                </div>
                <div className='inputContato' >
                    <MDBTextArea 
                    label='Mensagem'
                    name='Mensagem'
                    id='textAreaExample' 
                    rows={3}/>
                
                </div>
                <div className='d-flex justify-content-center'>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </div>
                
                
                <div className="d-flex-column justify-content-center" style={{paddingBottom: "1rem"}}>
                  {/*<React.Fragment className="d-flex justify-content-center">
                  <ReCAPTCHA
                  className='d-flex justify-content-center' style={{margin: "1rem"}}
                  ref={recaptchaRef}
                  sitekey="6LcL-ysqAAAAAOQ3jD3t2GzwxohlYQ_23PYVowzt"
                  onChange={handleTokenChange}
                />
                
                  </React.Fragment>*/}
                  
                <React.Fragment>
                
                  <MDBBtn type="submit" className='botaoEnviarContato' style={{ color: buttonColor, borderColor: buttonColor, backgroundColor: buttonBackgroundColor }} value="Send">{buttonText}</MDBBtn>
                </React.Fragment>
                </div>
                </form>
        </div>
    )    
}

export default FormularioContato