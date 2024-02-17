require('dotenv').config()
const express = require('express')
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const itemRoute = require('./router/item-router')
const orderRoute = require('./router/order-router')
const adminRoute = require('./router/admin-router')
const connectDB = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')
const cors = require('cors')
const PORT = 4000
const app = express()

const corsOption = {
    origin : "http://localhost:5173",
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

app.use(errorMiddleware)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}!`)
    })
}).catch( () => {
    console.log("Error Occrred in Starting Server.")
})
