// models/destinationModel.js
import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add destination name'],
  },
  description: {
    type: String,
    required: [true, 'Please add description'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please add an image URL'],
  },
  features: {
    type: [String], // Array of strings like ["Beach", "Trekking", "Nightlife"]
    default: [],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 4,
  }
}, { timestamps: true });

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;
