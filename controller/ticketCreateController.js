const Ticket = require('../model/TambolaTicket');
const { generateTambolaTicket } = require('../util/ticketGenerator');

// Handle ticket creation
const createTicket = async (req, res) => {
  const { numberOfTickets } = req.body;

  try {
    // Generate the specified number of Tambola tickets
    const tickets = [];
    for (let i = 0; i < numberOfTickets; i++) {
      const ticket = generateTambolaTicket(); // Use your ticket generation logic here
      tickets.push(ticket);
    }

    // Save the tickets in the database
    const savedTickets = await Ticket.insertMany(tickets);

    // Return the unique IDs of the created tickets as the response
    const ticketIds = savedTickets.map((ticket) => ticket._id);
    res.json({ ticketIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createTicket,
};
