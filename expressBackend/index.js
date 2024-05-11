const express = require('express');
const config = require('dotenv').config();
const cors = require('cors');
const user = require("./routes/userRoute.js");
const blog = require("./routes/blogRoute.js");
const mongoose = require('mongoose');
const path = require('path')




const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());

const buildPath = path.join(__dirname, 'build')

//Get static files
app.get('*', (req, res)=>{
    res.sendFile(path.join(buildPath, 'index.html'))

})

app.use(express.json());


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




