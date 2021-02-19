import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Row>
            <h1 className='text-center'>Sello MarketPlace</h1>
          </Row>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
