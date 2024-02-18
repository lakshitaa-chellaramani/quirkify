require('dotenv').config()
const express = require('express')
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const itemRoute = require('./router/item-router')
const orderRoute = require('./router/order-router')
const paymentRoute = require('./router/payment-router')
const adminRoute = require('./router/admin-router')
const cartRoute = require('./router/cart-router')
const connectDB = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')
const cors = require('cors')
const PORT = 4000
const app = express()

const corsOption = {
    origin : "http://localhost:5174",
    methods : "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials : true
}
app.use(cors(corsOption))
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/auth", contactRoute)
app.use("/api/admin", adminRoute)
app.use("/api/items", itemRoute)
app.use("/api/orders", orderRoute)
app.use("/api/carts", cartRoute)

app.use("/api/payments", paymentRoute)

app.get('/api/getKey', (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_KEY_ID
    })
})

app.use(errorMiddleware)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}!`)
    })
}).catch( () => {
    console.log("Error Occrred in Starting Server.")
})
