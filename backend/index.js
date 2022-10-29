const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const authRoutes = require("./routes/auth");
// const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
require("dotenv").config();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log("connection doesn't happen", err.message);
  });

app.get("/", (req, res) => {
    res.send("The is the app");
    console.log("This is the app");
})
app.listen(port, () => {
    console.log("The app listening on port " + port);
})