const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  reg: String,
  marks: String,
});

module.exports = mongoose.model("studentSchema",studentSchema,"SL-Lab")