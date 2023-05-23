const express=require('express')
const router=express.Router()

const createTicketcontroller=require('../controller/ticketCreateController')
const getTicketscontroller=require('../controller/ticketFetchController')

router.post("/createTicket",createTicketcontroller.createTicket)
router.get("/fetchTicket",getTicketscontroller.getTickets)

module.exports=router