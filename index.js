const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is homepage baby");
});

const userRoute = require("./routes/user")

app.use("/api/v1", userRoute)

app.use((req, res) => {
  res.status(400).send("Route not found");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on port no ${PORT}`);
  });
}).catch((error) => {
  console.log(error.message)
})
