import express from 'express'
import { Orders } from './order.controller'

const router = express.Router()

router.post("/", Orders.createOrder)
router.get("/", Orders.gatAllorders)


export const OrdersRouts = router