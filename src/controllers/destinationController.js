// controllers/destinationController.js
import Destination from '../models/destinationModel.js';

// @desc    Get all popular destinations
// @route   GET /api/destinations/popular
// @access  Public
export const getPopularDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().sort({ rating: -1 });
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch destinations' });
  }
};
