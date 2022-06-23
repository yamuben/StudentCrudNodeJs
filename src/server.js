import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import bodyParser from "body-parser";
import routes from "./routes"
// const express = require('express');

const app = express();

//to allow req data from body,parms etc....
app.use(bodyParser.json());

app.use("/",routes);




//Db connections
const db = process.env.DATABASEURL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  });

//server configuration
const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
