const { count } = require("console");

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");

const app = express();

mongoose.connect("mongodb+srv://max:UZ0UePKvh4RG4j9h@cluster0.ir60z.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to Database!');
})
.catch(() => {
  console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req ,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers',
  "Origin, X-Requested-With, Content-type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTION");
  next();
});
//UZ0UePKvh4RG4j9h

app.use("/api/posts", postsRoutes);


module.exports = app;
