const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['quimicos', 'accesorios', 'equipos'],
    required: true
  },
  destacado: {
    type: Boolean,
    default: false
  },
  image: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);