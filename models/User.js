const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: Types.ObjectId, ref: 'urls' }],
});

module.exports = model('User', userSchema);
