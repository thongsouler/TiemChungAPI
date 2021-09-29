const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const vaccineRouter = require('./routes/vacRoutes')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/testApi", { useMongoClient: true }, () => {
  console.log("Connected db")
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());

app.use('/', vaccineRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
