// This file connects mongoose/ schema
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: {
      type: String,
      required: [true, 'Add item to list']
    },
    added: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
  });
  module.exports = mongoose.model('Todo', TodoSchema);

