import express from 'express';
const router = express.Router();
import { createTicket, getUserTickets, deleteTicket, notifyRecycler, getTicketDetails } from '../Controllers/ticketController.js';

router.post('/create', createTicket);
router.get('/getUserTicket', getUserTickets);
router.delete('/deleteTicket/:id', deleteTicket);
router.get('/notification', notifyRecycler);
router.get('/getTicketDetails/:id', getTicketDetails);

export default router;