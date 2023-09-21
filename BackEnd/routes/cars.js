const express = require('express');
const router = express.Router();
const carController = require('../controllers/cars')

router.post('/add-car', carController.addCar);
router.get('/get-cars/:mangerID' , carController.getCars);
router.delete('/delete-car/:carId/:mangerId', carController.deleteCar);
router.patch('/update-car/:mangerId', carController.updateCar);
module.exports = router;