import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import '../index.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const SignUpPage = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    const [isListening, setIsListening ] = useState(false);
    const [ input, setInput ] = useState(null);

    useEffect(() => {
        handleListen()
    }, [isListening])

const handleListen = () => {
    if(isListening) {
        mic.start()
        mic.onend = () => {
            console.log('continue..')
            mic.start()
        }
    } else {
        mic.stop()
        mic.onend = () => {
            console.log('Stopped mic on click')
        }
    }
    mic.onstart = () => {
        console.log('Mic is on..')
    }


    mic.onresult = event => {
        const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        console.log(transcript)
        setInput(transcript)

        mic.onerror = event => {
            console.log(event.error)
        }
    }
}


    return (
        // <div id="intro" class="bg-image shadow-2-strong">
<MDBContainer className="mx-auto">
<MDBRow>
    <MDBCol md="6">
    <MDBCard>
    <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="Black-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <div className="inputWithButton">
            <Form.Label>
                First name
            </Form.Label>
            <Form.Label>
            <Button id="iconBtn" variant="light" onClick={() => setIsListening(prevState => !prevState)}>
                { isListening ? <span><MDBIcon icon="microphone" /></span> : <span><MDBIcon icon="microphone-slash" /></span>}
                </Button>
            </Form.Label>
        </div>
            
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
              value={input}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Sign Up</Button>
        <MDBCol md='6'>
                  <p className='font-small grey-text d-flex justify-content-end'>
                    Have an account?
                    <a href='http://localhost:3000/login' className='blue-text ml-1'>
                      Log in
                    </a>
                  </p>
                </MDBCol>
      </Form>
      </MDBCardBody>
      <div className='footer pt-3 mdb-color lighten-3'>
              <MDBRow className='d-flex justify-content-center'>
                <p className='font-small white-text mb-2 pt-3'>
                  or Sign up with
                </p>
              </MDBRow>
              <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
                <a href='#!' className='fa-lg p-2 m-2 fb-ic'>
                  <MDBIcon
                    icon='facebook-f'
                    fab
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-lg p-2 m-2 tw-ic'>
                  <MDBIcon
                    fab
                    icon='twitter'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
                <a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
                  <MDBIcon
                    fab
                    icon='google-plus-g'
                    size='lg'
                    className='white-text'
                  ></MDBIcon>
                </a>
              </MDBRow>
            </div>
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    // </div>
    );
  }
  
//   render(<FormExample />);
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md='6'>
//           <MDBCard>
//             <MDBCardBody className='mx-4'>
//               <div className='text-center'>
//                 <h3 className='pink-text mb-5'>
//                   <strong>Sign up</strong>
//                 </h3>
//               </div>
//               <MDBInput label='Your email' group type='text' validate />
//               <MDBInput label='Your password' group type='password' validate />
//               <div className='md-form pb-3'>
//                 <div className='form-check my-4'>
//                   <MDBInput
//                     label={
//                       <>
//                         Accept&nbsp;
//                         <a href='!#' className='blue-text'>
//                           the Terms and Conditions
//                         </a>
//                       </>
//                     }
//                     type='checkbox'
//                     id='checkbox1'
//                   />
//                 </div>
//               </div>
//               <MDBRow className='d-flex align-items-center mb-4'>
//                 <MDBCol md='6' className='text-center'>
//                   <MDBBtn className='z-depth-1' color='pink' rounded block>
//                     Sign up
//                   </MDBBtn>
//                 </MDBCol>
//                 <MDBCol md='6'>
//                   <p className='font-small grey-text d-flex justify-content-end'>
//                     Have an account?
//                     <a href='#!' className='blue-text ml-1'>
//                       Log in
//                     </a>
//                   </p>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCardBody>
//             <div className='footer pt-3 mdb-color lighten-3'>
//               <MDBRow className='d-flex justify-content-center'>
//                 <p className='font-small white-text mb-2 pt-3'>
//                   or Sign up with
//                 </p>
//               </MDBRow>
//               <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
//                 <a href='#!' className='fa-lg p-2 m-2 fb-ic'>
//                   <MDBIcon
//                     icon='facebook-f'
//                     fab
//                     size='lg'
//                     className='white-text'
//                   ></MDBIcon>
//                 </a>
//                 <a href='#!' className='fa-lg p-2 m-2 tw-ic'>
//                   <MDBIcon
//                     fab
//                     icon='twitter'
//                     size='lg'
//                     className='white-text'
//                   ></MDBIcon>
//                 </a>
//                 <a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
//                   <MDBIcon
//                     fab
//                     icon='google-plus-g'
//                     size='lg'
//                     className='white-text'
//                   ></MDBIcon>
//                 </a>
//               </MDBRow>
//             </div>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );

export default SignUpPage;