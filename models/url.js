const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  fullUrl: String,
  shortUrl: String,
  urlCode: String,
});

module.exports = mongoose.model('Url', urlSchema);
