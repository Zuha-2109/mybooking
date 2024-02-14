import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";


export const createRoom = async(req, res, next) =>{

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try{

        //save our room , create and save
        const savedRoom = await newRoom.save();
        //update our Room
        try{
            await Hotel.findByIdAndUpdate(hotelId, 
                {$push :{rooms: savedRoom._id},}) // we are adding saved room id inside Room rooms in Room.js(model)
        }
        catch(err){
            next(err);

        }
        res.status(200).json(savedRoom);

    }catch(err){
        next(err);
    }

}

//update 

export const updateRoom = async (req, res, next) => {

    try{
        //findByIdAndUpdate(updatedRoom) method return the previous document on postman but data is updated in database
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,  
            {$set: req.body},
        //to prevent this we write the another option i.e new:true
            {new:true}
            // after updating it will return to new version of document
            ); 
        res.status(200).json(updatedRoom)

    }catch(err){
        next(err);
    }
}

//update availiblity
// availability
export const updateRoomAvailability = async (req, res, next) => {

    try{
        await Room.updateOne(
          { "roomNumbers._id": req.params.id },
          {
            $push: {
              "roomNumbers.$.unavailableDates": req.body.dates
            },
          }
        );
        res.status(200).json("Room status has been updated.")

    }catch(err){
        next(err);
    }
}

//delete

export const deleteRoom = async (req, res, next) => {

    //when we delete our room we should again update our hotel

    const hotelId = req.params.hotelid;

    try{
        await Room.findByIdAndDelete(
            req.params.id
        )
            //update our Room
            try{
                await Hotel.findByIdAndUpdate(hotelId, 
                    { 
                        $pull :{ rooms: req.params.id},
                }) // we are adding saved room id inside Room rooms in Room.js(model)
            }
            catch(err){
                next(err);
    
            }
        res.status(200).json("Room Deleted Succesfully.")

    }catch(err){
        next(err);
    }
}


//get
export const getRoom = async (req, res, next) => {

    try{
        const room = await Room.findById(
            req.params.id
        );
        res.status(200).json(room)

    }catch(err){
        
        next(err);

    }

}


//getall
export const getRooms = async (req, res, next) => {

    try{
        const rooms = await Room.find();
        res.status(200).json(rooms)

    }catch(err){
        next(err);

    }

}