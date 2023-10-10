require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const router = require('./router/router')
const sequelize = require('./db')
require('./models/user-model')
require('./models/token-model')
require('./models/product-model')
const errorMiddleware = require('./middlewares/error-middleware')
const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.static("public"))
app.use(fileUpload({}))
app.use(cookieParser())
app.use('/api', router)

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    })

    res.send({
        clientSecret: paymentIntent.client_secret,
    })
})

app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        // await sequelize.sync({alter: true})
        app.listen(PORT, () => console.log(`Server has been started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
