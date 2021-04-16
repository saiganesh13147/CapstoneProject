import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer>
      {/* <Container>
        <Row> */}
          
          <FooterContainer className="main-footer">
          <div className="footer-middle">
            <div className="container">
              <div className="row">
                {/* Column 1 */}
                <div className="col-sm-3 col-md-3">
                  <h4>Contact Us</h4>
                  <ul className="list-unstyled">
                    <li>Vanier Drive</li>
                    <li>Ontario</li>
                    <li>Main St</li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="col-sm-3 col-md-3">
                  <h4>About Us</h4>
                  <ul className="list-unstyled">
                    <li><a href="/">Story</a></li>
                    <li><a href="/">Clients</a></li>
                    <li><a href="/">Testimonials</a></li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div className="col-sm-3 col-md-3">
                  <h4>Services</h4>
                  <ul className="list-unstyled">
                    <li><a href="/">Marketing</a></li>
                    <li><a href="/">Consulting</a></li>
                    <li><a href="/">Development</a></li>
                    <li><a href="/">Design</a></li>
                  </ul>
                </div>
                {/* Column 4 */}
                <div className="col-sm-3 col-md-3">
                  <h4>Social</h4>
                  <ul className="list-unstyled">
                    <li><a href="https://facebook.com/"><SocialIcon url="https://facebook.com/in/jaketrent" />Facebook</a></li>
                    <li><a href="https://instagram.com"><SocialIcon url="https://instagram.com/in/jaketrent" />Instagram</a></li>
                    <li><a href="https://youtube.com/"><SocialIcon url="https://youtube.com/in/jaketrent" />Youtube</a></li>
                    <li><a href="https://twitter.com/"><SocialIcon url="https://twitter.com/jaketrent" />Twitter</a></li>
                  </ul>
                </div>
              </div>
              {/* Footer Bottom */}
              <hr/>
              <Col className='text-center py-3'>
            Copyright &copy;{new Date().getFullYear()} Sello MarketPlace - All Rights Reserved
          </Col>
            </div>
          </div>
          </FooterContainer>
        {/* </Row>
      </Container> */}
    </footer>
  )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
  background: var(--mainDark);
  padding-top: 3rem;
  color: var(--mainWhite);
}

ul li a {
  color: var(--mainGrey);
}

ul li a:hover {
  color: var(--mainLightGrey);
}


`;
