const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    name: String,
    data: String,
});

module.exports = mongoose.model('Data', dataSchema);
