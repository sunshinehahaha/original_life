var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Index = new Schema({
    imgUrl : String,
    date     : { type: Date, default: Date.now }
});

var IndexModel = mongoose.model('index', Index);

module.exports = IndexModel;