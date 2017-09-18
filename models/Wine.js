const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  name: String,
  avatar: String,
  harvest: Number,
  type: String

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

});


const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;
