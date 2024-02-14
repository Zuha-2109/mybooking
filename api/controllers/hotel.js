import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js"

export const createHotel = async (req, res, next) => {

    const newHotel = new Hotel(req.body) //store our hotel info, request is soemthing we take from user
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)

    }catch(err){
        next(err);

    }

}

//update 

export const updateHotel = async (req, res, next) => {

    try{
        //findByIdAndUpdate(updatedHotel) method return the previous document on postman but data is updated in database
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,  
            {$set: req.body},
        //to prevent this we write the another option i.e new:true
            {new:true}
            // after updating it will return to new version of document
            ); 
        res.status(200).json(updatedHotel)

    }catch(err){
        next(err);

    }

}


//delete

export const deleteHotel = async (req, res, next) => {

    try{
        await Hotel.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Hotel Deleted Succesfully.")

    }catch(err){
        next(err);

    }

}


//get
export const getHotel = async (req, res, next) => {

    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel)

    }catch(err){
        
        next(err);

    }

}


//getall
export const getHotels = async (req, res, next) => {


    try{

    const { limit, min, max, ...query } = req.query

        // const {limit,featured}=req.query;
        const hotels = await Hotel.find({
            ...query,
            cheapestPrice:{$gt:min || 0, $lt:max ||999 }
        
        }).limit(limit);
        res.status(200).json(hotels)

    }catch(err){
        next(err);

    }

}
// export const getHotels = async (req, res, next) => {
//     const { min, max, ...others } = req.query;
//     try {
//       const hotels = await Hotel.find({
//         ...others,
//         cheapestPrice: { $gt: min || 1, $lt: max || 999 },
//       }).limit(req.query.limit);
//       res.status(200).json(hotels);
//     } catch (err) {
//       next(err);
//     }
//   };

//get by city
// export const countByCity = async (req, res, next) => {
//     const cities = req.query.cities.split(",");
//     try {
//       const list = await Promise.all(
//         cities.map((city) => {
//           return Hotel.countDocuments({ city: city });
//         })
//       );
//       res.status(200).json(list);
//     } catch (err) {
//       next(err);
//     }
//   };
  export const countByCity = async (req, res, next) => {
    const cities = req.query.cities?.split(",");
    if (cities) {
      try {
        const list = await Promise.all(
          cities?.map((city) => {
            return Hotel.countDocuments({ city: city });
          })
        );
        return res.status(200).json(list);
      } catch (err) {
        next(err);
      }
    }
  };
//   export const countByCity = async (req, res, next) => {

//     const cities = req.query.cities?.split(",");
//     if(cities){
//     try{

//         //finiding multiple items hence use promise.all
//         const list = await Promise.all(
//             cities?.map((city) => {
            
//             return Hotel.countDocuments({ city: city})
//             //not using find because it will be expensive because it fetch all data and properties and then find its length
//             //MongoDb countDocument does same thing but it is not fetching any property it just shows its count and makes it much faster

//         })
//         )
//         return res.status(200).json(list);
//     }
//         catch(err){
//         next(err);

//     }

// }
// }

//get by propertytype

export const countByType = async (req, res, next) => {

    try{

    const hotelCount = await Hotel.countDocuments({type:"hotel"})
    const apartmentCount = await Hotel.countDocuments({type:"apartments"})

    const resortCount = await Hotel.countDocuments({type:"resorts"})

    const villaCount = await Hotel.countDocuments({type:"villas"})

    const cabinCount = await Hotel.countDocuments({type:"cabins"})
    const cottageCount = await Hotel.countDocuments({type:"cottages"})

    const vacationCount = await Hotel.countDocuments({type:"vacations"})

      
        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "apartments", count: apartmentCount},

            {type: "resorts", count: resortCount},

            {type: "villas", count: villaCount},

            {type: "cabins", count: cabinCount},

            {type: "cottages", count: cottageCount},

            {type: "vacations", count: vacationCount},

        ]);
    }
        catch(err){
        next(err);

    }

}

export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };
