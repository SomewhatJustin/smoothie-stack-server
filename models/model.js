const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  isFeatured: {
    required: true,
    type: Boolean,
    default: false
  },
  path: {
    required: true,
    type: String
  },
  recipe: {
    ingredients: Array,
    amount: Array,
    notes: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Data', dataSchema)