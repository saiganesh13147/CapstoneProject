import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)

  //   const [products, setProducts] = useState([])

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       const { data } = await axios.get('api/products')

  //       setProducts(data)
  //     }
  //     fetchProducts()
  //   }, [])

  console.log(product)
  return (
    <div>
      <LinkContainer to='/'>
        <Button>Go Back</Button>
      </LinkContainer>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3> {product.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
