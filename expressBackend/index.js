const express = require('express')
const config = require('dotenv').config()
const cors = require('cors')
const user = require("./routes/userRoute.js")
const mongoose = require('mongoose')



const PORT = process.env.PORT;
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

app.use('/', user)

mongoose.connect(process.env.MONGODB_URI).then(
    ()=>{
        app.listen(PORT, ()=>{
            console.log("App listening on port:", PORT)
        })
    }

).catch((error)=>{
    console.log(error)
})




