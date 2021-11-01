const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
user:{
    name:{type:"String"},
    email:{type:"String"}
}

}
);

module.exports = Users = mongoose.model("Users", UserSchema);