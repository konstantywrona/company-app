const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
