export { }
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Surveyschema
const surveyModel = mongoose.model('weightloss', new Schema({
  url: {

    type: String,
    required: true

  },
  title: {

    type: String,
    required: true

  },
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: String,
    required: true
  }
},
  {
    collection: 'weightloss'
  }));
module.exports = { surveyModel }
