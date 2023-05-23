// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate a single row for the Tambola ticket
  function generateRow() {
    const row = [];
    const usedNumbers = new Set(); // Track used numbers to ensure uniqueness
  
    // Generate 5 numbers for the row
    while (row.length < 5) {
      const number = getRandomNumber(1, 90);
      if (!usedNumbers.has(number)) {
        row.push(number);
        usedNumbers.add(number);
      }
    }
  
    row.sort((a, b) => a - b); // Sort the numbers in ascending order
    return row;
  }
  
  // Generate a Tambola ticket
  function generateTambolaTicket() {
    const ticket = [];
    const usedNumbers = new Set(); // Track used numbers to ensure uniqueness
  
    // Generate 3 rows for the ticket
    while (ticket.length < 3) {
      const row = generateRow();
      ticket.push(row);
      row.forEach((number) => usedNumbers.add(number));
    }
  
    // Fill remaining cells with zeros or "x"
    while (ticket.flat().length < 15) {
      const number = getRandomNumber(1, 90);
      if (!usedNumbers.has(number)) {
        usedNumbers.add(number);
        ticket[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 5)] = number;
      }
    }
  
    return ticket;
  }
  
  module.exports = {
    generateTambolaTicket,
  };
  