const carModel = require('./Models/cars');
module.exports = {
    addCar: async (req, res, next) => {
        console.log("car detail is ==>", req.body);
        const { name, model, colour, availability, mangerID } = req.body;
        try {
        const newCar = {
          name,
          model,
          colour,
          availability,
        };
        console.log(newCar)
        let CarDetail = await carModel.findOne({ mangerID : mangerID });
        console.log("id existed ==>", CarDetail);
        if (!CarDetail) {
          CarDetail = await carModel.create({ mangerID: mangerID, cars: [newCar] });
        } 
        else {
          console.log("manager existed");
          CarDetail.cars.push(newCar);
          await CarDetail.save();
        }
        res.json({
          status: "Success",
          message: "Car added successfully to manager",
          data:CarDetail,
        });
      } catch (error) {
        res.json({
          status: "Failed",
          message: "Failed to add car",
          data: null,
        });
        next(error);
      }
      },
getCars: async (req, res)=> {
  const mangerID = req.params.mangerID; //mangerID to get only its cars
  await carModel.find({ mangerID}).select('cars')
            .then((foundCar) => {
                if (!foundCar) {
                    return res.status(404).json({
                        status: 404,
                        msg: 'Car not found',
                        data: null
                    });
                }
                res.status(200).json({
                    status: 200,
                    msg: 'Cars retrieved successfully',
                    data: foundCar
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 500,
                    msg: 'Error retrieving Cars',
                    error: err.message
                });
            });
    },
    deleteCar: async(req, res)=>{
    const mangerId = req.params.mangerId;
    const carId = req.params.carId;
    const foundManager= await  carModel.findOne({ mangerID: mangerId });
    console.log(foundManager);
    if (foundManager) {
          const foundCar = foundManager.cars.findIndex((car) => car._id.toString() === carId);
          foundManager.cars.splice(foundCar, 1); //remove object from cars array
          await foundManager.save();
          res.status(200).json({
            status: 200,
            msg: 'Car delete successfully',
            data: foundManager.cars
        });
    } else {
      res.status(404).json({
        status: 404,
        msg: 'Manager not found',
        data: "Not able to show"
    });    }
},
updateCar: async(req, res)=>{
  const mangerId = req.params.mangerId;
  const carId = req.body._id //cars id 
   const carObj = {
   name   :  req.body.name,
   model  : req.body.model,
   colour : req.body.colour,
   availability: req.body.availability
   }
   try {
    const updatedCar = await carModel.findOneAndUpdate(
      {
        mangerID: mangerId, 
        'cars._id': carId 
      },
      {
        $set: {
          'cars.$': carObj 
        }
      },
      {
        new: true
      }
    );
  
    if (updatedCar) {
      res.status(200).json({
        status: 200,
        msg: 'Car updated successfully',
        data: updatedCar
      });
    } else {
      res.status(404).json({
        status: 404,
        msg: 'Car not found'
      });
    }
  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({
      status: 500,
      msg: 'Internal Server Error'
    });
  }
},
}