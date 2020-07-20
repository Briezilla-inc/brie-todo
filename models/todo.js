// This file connects mongoose/ schema
const mongoose = require(mongoose);

const TodoSchema = new mongoose.Schema({
    text: {
      type: String,
      trim: true,
      required: [true, 'Add item to list']
    }
  });
  module.exports = mongoose.model('Todo', TodoSchema);
