import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginForm from './components/LoginPage'
import SignupForm from './components/SignUpPage'

const App = () => {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);
  // }
  // const Logout = () => {
  //   console.log("Logout");
  // }
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/products/:id' component={ProductScreen} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={SignupForm} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
