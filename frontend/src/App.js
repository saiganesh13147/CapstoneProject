import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <h1 className='text-center'>Sello MarketPlace</h1>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
