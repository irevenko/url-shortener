const { Schema, model } = require('mongoose');

const urlSchema = new Schema({
  fullUrl: String,
  shortUrl: String,
  urlCode: String,
});

module.exports = model('Url', urlSchema);
