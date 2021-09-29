const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VaccineScheme = new Schema({
  name: {
    type : String,
    default : "",
  },
  company: {
    type : String,
    default : "",
  },
  imageUrl: {
    type : String,
    default : "",
  },
  description : {
    type : String,
    default : "",
  },
  price : {
    type : String,
    default : "",
  },
});

const VaccineModel = mongoose.model('Vaccine', VaccineScheme, 'vaccines');
module.exports = VaccineModel;