const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    mangerID: {
      type: String,
      trim: true,
      required: true,
    },
    cars: [
      {
        name: {
          type: String,
          trim: true,
        },
        model: {
          type: String,
          trim: true,
        },
        colour: {
          type: String,
          trim: true,
        },
        availability: {
          type: String,
          enum: ['available', 'not available', 'reserved'],
          default: 'available',
        },
      },
    ],
  });
  
module.exports = mongoose.model('Car', CarSchema);