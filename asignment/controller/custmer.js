import dbConnection from "../db.js";
import asyncHandler from "../asyncHandler.js";
import CustomerList from "../models/model.js";

dbConnection();

export const CustomerBookingList = asyncHandler(async (req, res) => {
    try {
        const bookingList = await CustomerList.find({});

        if (bookingList.length === 0) {
            res.json("No bookings available.");
            return;
        }

        // Gather all booking details
        const bookingDetails = bookingList.map(booking => {
            return `time ${booking.time} to ${booking.endTime} booked`;
        }).join("\n");

        // Send a single response with all booking information
        res.json(bookingDetails);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.error(`Customer error: ${error.message || error}`);
    }
})



export const CustomerRegister = asyncHandler(async (req, res) => {
    const { name, time, type } = req.body;
    try {
        const requestedTime = new Date(time);
        let endTime;

        // Calculate end time based on type
        if (type === "first") {
            endTime = new Date(requestedTime.getTime() + 30 * 60000); // Add 30 minutes
        } else if (type === "second") {
            endTime = new Date(requestedTime.getTime() + 60 * 60000); // Add 1 hour
        } else if (type === "third") {
            endTime = new Date(requestedTime.getTime() + 90 * 60000); // Add 1 hour and 30 minutes
        } else {
            res.status(400).json("Undefined type");
            return;
        }

        // Find all customers with the same name
        const existingCustomers = await CustomerList.find({ name });

        let timeSlotAvailable = true;

        for (let customer of existingCustomers) {
            const dbtime = new Date(customer.time);
            let customerEndTime;

            // Calculate end time for existing customer based on type
            if (customer.type === "first") {
                customerEndTime = new Date(dbtime.getTime() + 30 * 60000); // Add 30 minutes
            } else if (customer.type === "second") {
                customerEndTime = new Date(dbtime.getTime() + 60 * 60000); // Add 1 hour
            } else if (customer.type === "third") {
                customerEndTime = new Date(dbtime.getTime() + 90 * 60000); // Add 1 hour and 30 minutes
            }

            // Check for overlapping time slots
            if ((requestedTime >= dbtime && requestedTime < customerEndTime) || (endTime > dbtime && endTime <= customerEndTime)) {
                timeSlotAvailable = false;
                break;
            }
        }

        if (timeSlotAvailable) {
            const registered = await CustomerList.create({ name, time, type });
            res.json(registered);
        } else {
            res.status(404).json("Time slot not available");
        }
    } catch (error) {
        res.status(500).json({ message: `Customer error: ${error.message}` });
    }
});
