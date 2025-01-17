import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    ticketId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String
    },
    raisedBy: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    items: {
        type: Array,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    images:{
        type: Array
    }
},
{
    timestamps: true
});

const Ticket = mongoose.model('Ticket', TicketSchema);
export default Ticket;