var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Goods = new Schema({
    imgUrl  : String,
    name    : String,
    price   : Number,
    sysNo   : String,
    date    : { type: Date, default: Date.now }
});

var GoodsModel = mongoose.model('goods', Goods);

module.exports = GoodsModel;