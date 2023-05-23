const Ticket = require('../model/TambolaTicket');

// Handle ticket fetching with pagination
const getTickets = async (req, res) => {
  const { page, limit } = req.query;

  try {
    // Calculate the skip value based on the page and limit
    const skip = (page - 1) * limit;

    // Fetch tickets from the database with pagination
    const tickets = await Ticket.find()
      .skip(skip)
      .limit(limit)
      .exec();

    // Return the ticket list as the response
    res.json({ tickets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getTickets,
};
