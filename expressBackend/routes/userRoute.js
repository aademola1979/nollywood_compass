const express = require('express')
const {signUp, getAllUsers, getSingleUser, updateUser, signIn} = require("../controllers/userController.js")


const router = express.Router();
//Admin GET all users route
router.get("/users", getAllUsers)

//Admin GET a single user
router.get("/user/:id", getSingleUser)

//Sign Up route
router.post("/signUp", signUp)

//Sign In route
router.post("/signIn", signIn)

//EDIT/UPDATE user route
router.patch("/user/:id", updateUser)

module.exports = router