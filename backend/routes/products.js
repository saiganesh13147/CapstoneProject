import express from 'express';
import { getProducts, createProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is working')
  });
router.get('/products', getProducts);
router.post('/create', createProduct);

export default router;