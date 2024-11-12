const mongoose = require('mongoose');

const PaletteSchema = new mongoose.Schema({
  baseColor: String,
  colors: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Palette',PaletteSchema);