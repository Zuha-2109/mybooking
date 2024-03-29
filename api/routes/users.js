import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


//Create
// router.post("/", createUser);

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{

//     res.send("hello user, you are logged in")
// })

// //try to delete or update our user
// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{

//     res.send("hello user, you are logged in and you can delete your account")
// })

// // checkadmin

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{

//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

//Update

router.put("/:id", verifyUser, updateUser);

//Delete

router.delete("/:id", verifyUser, deleteUser);

//Get

router.get("/:id", verifyUser, getUser);

//Get All
// only admin will verify all users
router.get("/", verifyAdmin, getUsers);


export default router