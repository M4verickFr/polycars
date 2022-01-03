var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarsSchema = new Schema({
  title : String,
  description : String,
  image: String,
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Cars', CarsSchema);
