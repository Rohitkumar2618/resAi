const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/resai"
  );
};

module.exports = connectDB;