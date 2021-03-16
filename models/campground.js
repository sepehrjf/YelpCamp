const mongoose = require('mongoose');

//reference to mongoose.Schema to make it shorter for rest of the code
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', campgroundSchema);



