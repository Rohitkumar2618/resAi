const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rohitkumarmankar26akrk:7YQBtyDuwmPZ2qXP@cluster0.hgs5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

module.exports = connectDB;
