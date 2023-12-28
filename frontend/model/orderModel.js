const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    "productId": {
        type: Number
    },
    "quantity": {
        type: Number
    }
});
const OrderSchema = new mongoose.Schema({
    "id": {
        type: Number
    },
    "user_id": {
        type: Number
    },
    "products":{
        type:[productSchema]
    },
    "totalPrice":{
        type: Number
    },
    "orderDate":{
        type: String,
        default: new Date()
    },
    "status":{
        type: String
    }
});

const Order = new mongoose.model('Order', OrderSchema);
module.exports = Order;