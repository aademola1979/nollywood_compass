const express = require('express');
const config = require('dotenv').config();
const cors = require('cors');
const user = require("./routes/userRoute.js");
const blog = require("./routes/blogRoute.js");
const mongoose = require('mongoose');
const {connectToDb, getDB} = require('./db')
const {getAllBlogs} = require('./controllers/blogController.js')


const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.json());

/*let db;

connectToDb((err)=>{
    if(!err){
        app.listen(PORT, ()=>{
            console.log(`App listening on ${PORT}`)
        })
        db = getDB()
    }

})

app.get('/', async(req, res)=>{
    const users = [];
    try {
         await db.collection('blogs').find()
         .sort({createdAt: 1})
         .limit(20)
         .forEach((user)=>users.push(user))
         .then(
            ()=>{
                return res.status(200).json(users)
            }
         )
    } catch (error) {
        return res.status(400).json(error)
    }

})*/

app.use('/', user);
app.use('/', blog)


mongoose.connect(process.env.LOCALDB_URI).then(
    ()=>{
        app.listen(PORT, ()=>{
            console.log("App listening on port:", PORT)
        })
    }

).catch((error)=>{
    console.log(error)
})




