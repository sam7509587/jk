const mongoose =require("mongoose");

const produceSchema = mongoose.Schema({
createdBy: {type: mongoose.Schema.Types.ObjectId , ref: "User"},  
productName	:String,
categoryId:{type: mongoose.Schema.Types.ObjectId , ref: "category"},
brandId:{type: mongoose.Schema.Types.ObjectId , ref: "brand"},
price	:{type: String},
isAvailable	:{type: Boolean,default: true},
image:{type: mongoose.Schema.Types.ObjectId , ref: "image"},
rating	:{type: String},
quantity  :{type: Number,default :0},
description	:String,
isApproved	:{type: Boolean,default: false},
reviews: [{type: mongoose.Schema.Types.ObjectId , ref: "review"}]

},{timestamps:true })

produceSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  });
  produceSchema.index({'$**': 'text'});  
const product= mongoose.model("product",produceSchema)
module.exports = product
