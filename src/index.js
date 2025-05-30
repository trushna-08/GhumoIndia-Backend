// app.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import cors from "cors"; // Import CORS middleware

dotenv.config();
const app = express();

app.use(cors({ origin: "*" })); // Allow all origins for CORS

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/destinations", destinationRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
