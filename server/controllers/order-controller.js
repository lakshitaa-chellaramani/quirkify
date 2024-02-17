const Order = require("../models/order-model")
const User = require("../models/user-model")
const nodemailer = require('nodemailer')

const createOrder = async (req, res) => {
    const orderData = req.body
    await Order.create(orderData)
    res.status(200).json({ message: "Order Created Successfully." })
}

const getOrders = async (req, res) => {
    const orders = await Order.find({})
    if (!orders) {
        return res.status(404).json({ message: "No Order Found." })
    }
    res.status(200).json({ orders })
}

const orderPickedUp = async (req, res) => {
    try {
        const filter = { _id: req.body.id }
        const update = {
            $set: {
                isPickedUp: true
            }
        }
        const result = await Order.updateOne(filter, update);
        if (result.modifiedCount === 0) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            res.status(200).json({ message: 'Order Picked-Up Successfully.' });
        }
    } catch (error) {
        console.log(`${error}`)
        res.status(500).json(`Internal Server Error.`)
    }
}

const orderReady = async (req, res) => {
    const response = req.body
    const senderEmail = 'alientesting02@gmail.com'

    const message = `Your Order with Order id ${response.id} is Ready please pick it up from our Food Truck.\nThank You for ordering with us.`

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `Quirkify Support <${senderEmail}>`,
            to: response.email,
            subject: 'Order Pickup Message',
            text: message
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Mail is Sent to User's Mail-Id" })
    } catch (error) {
        res.status(500).json({ message: "Server Error in Sending Mail." })
        console.log(error)
    }
}

module.exports = { createOrder, getOrders, orderPickedUp, orderReady }