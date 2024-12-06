// const mongoose = require("mongoose");

// const resScoreSchema = new mongoose.Schema({
//   crisis: { type: Object, default: {} },
//   economics: { type: Object, default: {} },
//   physical: { type: Object, default: {} },
//   strategies: { type: Object, default: {} },
//   environment: { type: Object, default: {} },
//   social: { type: Object, default: {} },
// }, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// const ResScore = mongoose.model("ResScore", resScoreSchema);

// module.exports = ResScore;



const mongoose = require("mongoose");

// Define the schema for resScorePreparedness
const resScoreSchema = new mongoose.Schema(
  {
    crisis: { type: Object, default: {} },
    economics: { type: Object, default: {} },
    physical: { type: Object, default: {} },
    strategies: { type: Object, default: {} },
    environment: { type: Object, default: {} },
    social: { type: Object, default: {} },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

// Create the model
const ResScore = mongoose.model("ResScore", resScoreSchema);

module.exports = ResScore;
