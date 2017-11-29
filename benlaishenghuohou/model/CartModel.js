var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Goods = new Schema({
    imgUrl  : String,
    name    : String,
    price   : Number,
    username: String,
    flag    : { type: Number, default: 1 },
    date    : { type: Date, default: Date.now }
});

var CartModel = mongoose.model('cart', Goods);

module.exports = CartModel;