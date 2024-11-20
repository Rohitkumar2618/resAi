
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./config/database");
const authRoutes = require("./routes/auth");
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB()
  .then(() => {
    console.log("Connected to the database");
    app.use('/api/auth', authRoutes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.error(err.message));
