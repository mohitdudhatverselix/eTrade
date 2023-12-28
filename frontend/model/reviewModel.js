const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    "id":{
        type: Number
    },
    "product_id":{
        type: Number
    },
    "user_id":{
        type: Number
    },
    "rating":{
        type: Number
    },
    "text":{
        type: String
    },
});
const Reviews = mongoose.model('Reviews', reviewSchema);
module.exports = Reviews;