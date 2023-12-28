const mongoose = require('mongoose');
const categorieSchema = new mongoose.Schema({
    "title":{
        type: String
    },
    "imgSrc":{
        type: String
    },
    "id":{
        type: Number
    }
});
const Categories = mongoose.model('Categories', categorieSchema);
module.exports = Categories;