// TODO: express, mongoose, cors as basic dependecies;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
// middlewares;
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log("unable to build connection"));

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("Connection to MongoDB Atlas established successfully");
  })
  .catch(err => console.log("Unable to build connection with MongoDB ATLAS"));

const ingredientRouter = require("./Router/burgerrouter");
app.use("/burgeradd", ingredientRouter);
app.listen(port, () => {
  console.log(`Connection established on Port: ${port}`);
});
