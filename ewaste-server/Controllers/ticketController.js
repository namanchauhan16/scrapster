import asyncHandler from "express-async-handler";
import Ticket from "../Models/Ticket.js";

// @desc    Create a new ticket
const createTicket = asyncHandler(async (req, res) => {
  const { userId, items, address, date, name } = req.body;

  try {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().split("T")[0];

    if (new Date(date) > new Date(formattedDate)) {
      const ticket = new Ticket({
        ticketId: Math.floor(100000 + Math.random() * 900000),
        userId: userId,
        raisedBy: name,
        status: "Pending",
        items: items,
        location: address,
        pickupDate: date,
      });
      const createdTicket = await ticket.save();
      res.status(201).json(createdTicket);
    } else {
      res.status(400).json({ message: "Pickup date must be in the future." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//@desc  get user tickets
const getUserTickets = asyncHandler(async (req, res) => {
  const { userId } = req.query; // Get userId from query parameters
  try {
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const tickets = await Ticket.find({ userId: userId });
    if (!tickets || tickets.length === 0) {
      return res.status(404).json({ message: "No tickets found." });
    }

    const response = tickets.map((ticket) => ({
      ticketId: ticket.ticketId,
      status: ticket.status,
      items: ticket.items,
      location: ticket.location,
      pickupDate: ticket.pickupDate,
    }));
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//@desc delete ticket
const deleteTicket = asyncHandler(async (req, res) => {
  const { ticketId } = req.query; // Changed from req.query to req.params

  try {
    if (!ticketId) {
      return res.status(400).json({ message: "Ticket ID is required." });
    }

    const ticket = await Ticket.findOne({ ticketId: ticketId });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }

    await Ticket.deleteOne({ ticketId: ticketId });
    res.status(200).json({ message: "Ticket deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const notifyRecycler = asyncHandler(async (req, res) => {
  try {
    const ticket = await Ticket.find({ status: "Pending" });
    if (!ticket) {
      return res.status(404).json({ message: "No tickets found." });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getTicketDetails = asyncHandler(async (req, res) => {
  const { ticketId } = req.query;
  try {
    const ticket = await Ticket.findOne({ ticketId: ticketId });
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.json({
      ticketId: ticket.ticketId,
      status: ticket.status,
      items: ticket.items,
      location: ticket.location,
      pickupDate: ticket.pickupDate,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { createTicket, getUserTickets, deleteTicket, notifyRecycler, getTicketDetails };
