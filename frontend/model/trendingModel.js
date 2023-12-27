const mongoose = require('mongoose');
const trendingModel = new mongoose.Schema({
    "product_id": {
        type: Number,
    },
    "trendingTitle":{
        type: String,
    }
})
const Trending = mongoose.model('Trending', trendingModel);
module.exports = Trending;