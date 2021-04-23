import express from 'express'
const router = express.Router()

import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'

import { protect, seller } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, seller, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router
  .route('/:id')
  .delete(protect, seller, deleteUser)
  .get(protect, seller, getUserById)
  .put(protect, seller, updateUser)

export default router
