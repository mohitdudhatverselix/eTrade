const mongoose = require('mongoose');
const UserSchema = {
    "id": {
        type: Number
    },
    "username":{
        type: String
    },
    "email":{
        type: String
    },
    "password":{
        type: String
    },
    "role":{
        type: String
    }
}
const Users = mongoose.model('Users', UserSchema);
module.exports = Users;