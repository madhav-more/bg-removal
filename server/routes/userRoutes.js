import express from 'express'

import { clerWebhooks } from '../controllers/UserController.js'


const userRouter = express.Router()

userRouter.post('/webhooks' , clerWebhooks)

export default userRouter