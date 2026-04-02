const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({

name:{
type:String,
required:true,
trim:true
},

email:{
type:String,
required:true,
trim:true,
lowercase:true
},

source:{
type:String,
default:"unknown",
trim:true
},

status:{
type:String,
enum:["new","contacted","converted"],
default:"new"
},

priority:{
type:String,
enum:["low","medium","high"],
default:"low"
},

notes:{
type:String,
default:"",
trim:true
},

followUpDate:{
type:Date,
default:null
}

},{
timestamps:true   // ⭐ auto adds createdAt & updatedAt
});

module.exports = mongoose.model("Lead",LeadSchema);