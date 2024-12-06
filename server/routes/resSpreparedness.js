

// const express = require("express");
// const ResScore = require("../model/resScorePreparednessSchema"); // Path to your schema

// const router = express.Router();

// // API to save form data
// router.post("/save", async (req, res) => {
//   try {
//     const newResScore = new ResScore(req.body); // Create new document from request body
//     const savedResScore = await newResScore.save(); // Save to database
//     res.status(201).json({
//       message: "Data saved successfully",
//       data: savedResScore,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to save data",
//       error: error.message,
//     });
//   }
// });

// // Add more routes if needed

// module.exports = router;



const express = require("express");
const ResScore = require("../model/resScorePreparednessSchema"); // Ensure path is correct

const router = express.Router();

// API to save form data
router.post("/save", async (req, res) => {
  try {
    const newResScore = new ResScore(req.body); // Create a new document from the request body
    const savedResScore = await newResScore.save(); // Save it to the database
    res.status(201).json({
      message: "Data saved successfully",
      data: savedResScore,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save data",
      error: error.message,
    });
  }
});

// Additional routes can be added here if needed

module.exports = router;
