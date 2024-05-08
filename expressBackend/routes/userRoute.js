const express = require('express')
const {createUser, getAllUsers} = require("../controllers/userController.js")


const router = express.Router();
router.post("/createUser", createUser)
router.get("/getUsers", getAllUsers)

module.exports = router