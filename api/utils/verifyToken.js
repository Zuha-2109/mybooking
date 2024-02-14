import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next)=>{

    //take token from our cookies
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"))
    }

    //if there is token we should verify it if its correct one

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err)

        return next(createError(403, "Token is not valid!"));

        req.user = user;

        next()
    })
}

export const verifyUser = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            if(err) return next(createError(403, "You are not authorized."));

        }
        
    });
}

export const verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            if(err) return next(createError(403, "You are not authorized."));

        }
   
    });
}