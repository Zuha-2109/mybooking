import express from "express";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);

//Update

router.put("/:id", verifyAdmin, updateHotel);

//Delete

router.delete("/:id", verifyAdmin, deleteHotel);

//Get

router.get("/find/:id", getHotel);

//Get All

router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);


    // const failed = true;

    
    // if (failed) 
    // return next(createError(401, "You are not Authenticated."));

    // console.log("hi im hotel route")
    // return next() //goto next middleware

    // const newHotel = new Hotel(req.body) //store our hotel info, request is soemthing we take from user

router.get("/room/:id", getHotelRooms);

    


export default router