import User from "../models/User.js";

// export const createUser = async (req, res, next) => {

//     const newUser = new User(req.body) //store our User info, request is soemthing we take from user
//     try{
//         const savedUser = await newUser.save();
//         res.status(200).json(savedUser)

//     }catch(err){
//         next(err);

//     }

// }
// not creating user because we already have register function

//update 

export const updateUser = async (req, res, next) => {

    try{
        //findByIdAndUpdate(updatedUser) method return the previous document on postman but data is updated in database
        const updatedUser = await User.findByIdAndUpdate(req.params.id,  
            {$set: req.body},
        //to prevent this we write the another option i.e new:true
            {new:true}
            // after updating it will return to new version of document
            ); 
        res.status(200).json(updatedUser)

    }catch(err){
        next(err);

    }

}


//delete

export const deleteUser = async (req, res, next) => {

    try{
        await User.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("User Deleted Succesfully.")

    }catch(err){
        next(err);

    }

}


//get
export const getUser = async (req, res, next) => {

    try{
        const user = await User.findById(
            req.params.id
        );
        res.status(200).json(user)

    }catch(err){
        
        next(err);

    }

}


//getall
export const getUsers = async (req, res, next) => {

    try{
        const users = await User.find();
        res.status(200).json(users)

    }catch(err){
        next(err);

    }

}
