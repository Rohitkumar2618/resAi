
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const connectDB = require("./config/database");
// const authRoutes = require("./routes/auth");
// const port = 4000;

// app.use(express.json());
// app.use(cors());

// connectDB()
//   .then(() => {
//     console.log("Connected to the database");
//     app.use('/api/auth', authRoutes);
  
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch((err) => console.error(err.message));



// const express = require('express');
// const cors = require('cors');
// const connectDB = require("./config/database"); // Ensure this path points to your database connection setup
// const authRoutes = require("./routes/auth"); // Authentication routes
// const resScoreRoutes = require("./routes/resSpreparedness"); // Preparedness routes
// const app = express();
// const port = 4000;

// // Middleware
// app.use(express.json()); // Parse JSON bodies
// app.use(cors()); // Enable CORS for cross-origin requests

// // Connect to the database
// connectDB()
//   .then(() => {
//     console.log("Connected to the database");

//     // Define routes
//     app.use('/api/auth', authRoutes);
//     app.use("/api/save", resScoreRoutes);

//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to connect to the database:", err.message);
//   });



const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database"); // Database connection setup
const authRoutes = require("./routes/auth"); // Authentication routes
const resScoreRoutes = require("./routes/resSpreparedness"); // Preparedness routes
const app = express();
const port = 4000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for cross-origin requests

// Connect to the database
connectDB()
  .then(() => {
    console.log("Connected to the database");

    // Define routes
    app.use("/api/auth", authRoutes);
    app.use("/api/resscore", resScoreRoutes); // Use resScorePreparedness routes

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
  });
