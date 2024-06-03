import express from 'express';
import { CustomerBookingList, CustomerRegister } from '../controller/custmer.js';


const router = express.Router();

router.route('/')
  .get(CustomerBookingList)
  .post(CustomerRegister);

export default router;
