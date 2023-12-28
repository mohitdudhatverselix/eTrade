const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    "product_id" : {
        type: Number,
    },
    "quantity": {
        type: Number,
    }
});

const userDataSchema = new mongoose.Schema({
    "users_id":{
        type: Number,
    },
    "id":{
        type: Number,
    },
    "cart":{
        type: [cartSchema],
    }
});
const UserData = mongoose.model('UserData', userDataSchema); 
module.exports = UserData;