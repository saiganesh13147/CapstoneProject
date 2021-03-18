import express from 'express';
import { getProducts, createProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('products API is working')
  });
router.get('/', getProducts);
router.post('/create', createProduct);

export default router;