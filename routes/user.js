const express = require('express')
const router = express.Router();

const {createUser, getUsers, singleUser, deleteUser, updateUser} = require("../controllers/user")
const {validation} = require("../validation/userValidation");
const {handleValidation} = require("../middleware/handleValidation")


// CREATING A USER
router.post("/create", validation, handleValidation, createUser)

// RETREIVING ALL USERS
router.get("/users", getUsers)

// RETRIEVING A SINGLE USER
router.get("/user/:id", singleUser)

//DELETE A USER
router.delete("/user/:id", deleteUser)

//UPDATE A USER
router.put("/user/:id", updateUser)

module.exports = router;