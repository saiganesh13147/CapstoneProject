import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'
import mongoose from 'mongoose'

// const errorHandler = (err, res) => {
//   //res is the response object
//   console.log(err)
//   res.status(400).json({ msg: 'Error has occurred' })
// }

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: 'Not found' })
    }
    const product = await Product.findById(req.params.id).exec()
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Not found' })
    }
  })
)

// router.get('/:id', (req, res) => {
//   Product.findById(req.params.id)
//     .then((product) => {
//       if (product) {
//         res.json(product)
//       } else {
//         res.status(404).json({ message: 'Product not found' })
//       }
//     })
//     .catch((e) => errorHandler(e, res))
// })

export default router
