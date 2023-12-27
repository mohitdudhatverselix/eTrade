const mongoose = require('mongoose');
const arrivalSchema = new mongoose.Schema({
    "product_id": {
        type: Number,
    },
    "timePeriodOfArrivals":{
        type: String,
    }
})
const Arrivals = mongoose.model('Arrival', arrivalSchema);
module.exports = Arrivals;