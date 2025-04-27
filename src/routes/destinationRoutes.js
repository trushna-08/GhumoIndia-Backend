// routes/destinationRoutes.js
import express from 'express';
import { getPopularDestinations } from '../controllers/destinationController.js';

const router = express.Router();

// @route   GET /api/destinations/popular
router.get('/popular', getPopularDestinations);

export default router;
