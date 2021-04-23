import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import OrderScreenPayment from './screens/OrderScreenPayment'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import UserScreen from './screens/UserScreen'
import ContactUsScreen from './screens/ContactUsScreen'
import ProductListScreen from './screens/ProductListScreen'
import UserEditScreen from './screens/UserEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductEditScreen from './screens/ProductEditScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/contactus' component={ContactUsScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/order/:id' component={OrderScreenPayment} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/products/:id' component={ProductScreen} />
          <Route path='/admin/userlist' component={UserScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
