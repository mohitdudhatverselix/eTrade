const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    "id":{
        type:Number
    },
    "productTitle" : {
        type: String,
    },
    "price":{
        type: Number,
    },
    "oldPrice":{
        type: Number,
    }, 
    "productRating":{
        type: Number,
    },
    "isProductInStock":{
        type: Boolean,
    },
    "isFreeDeliveryAvailable":{
        type: Boolean,
    },
    "discountCode":{
        type: String,
    },
    "description":{
        type: String,
    },
    "colors":{
         type: [String],
         default: [] 
    },
    "sizes":{
        type: [String],
        default: [] 
    },
    "images":{
        type: [String],
         default: [] 
    },
    "thumbnail":{
        type: String,
    },
    "discount":{
        "discountPercentage": { type: Number},
        "discountText": { type: String},
    }
})
const products = mongoose.model('Product',productSchema);
module.exports = products;