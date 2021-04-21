import express from 'express'
const router = express.Router()

import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'

import { protect, seller } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, seller, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
