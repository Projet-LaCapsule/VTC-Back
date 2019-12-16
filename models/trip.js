const mongoose = require('mongoose');


const TripSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  datetrip: Date, 
  hourdeparture: String, 
  hourarrival: String, 
  price: String, 
  distance: Number, 
  time:String,
  
});

const tripModel = mongoose.model('trips', TripSchema);

module.exports = tripModel;