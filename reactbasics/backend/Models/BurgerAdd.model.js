// mongoose for schema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const burgerBucket = new Schema(
  {
    salad: { type: String, required: false },
    bacon: { type: String, required: false },
    cheese: { type: String, required: false },
    meat: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

const Bucket = mongoose.model("burgetBucket", burgerBucket);
module.exports = Bucket;
