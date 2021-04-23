import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../controllers/productController.js'

import { protect, seller } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, seller, createProduct)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, seller, deleteProduct)
  .put(protect, seller, updateProduct)

export default router
