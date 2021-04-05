const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

//returns a promise because it is an async function
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '60614710cd98c06dc1997f00',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium alias possimus, nostrum provident similique. Illo, quis minima consectetur similique obcaecati labore, nobis velit earum beatae quo eum id cum.',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dwe6muznm/image/upload/v1617559284/YelpCamp/xjumgcuiso9aczc2f0tt.jpg',
                    filename: 'YelpCamp/xjumgcuiso9aczc2f0tt'
                },
                {
                    url: 'https://res.cloudinary.com/dwe6muznm/image/upload/v1617559285/YelpCamp/emvdkjwtslqebuthvmdj.jpg',
                    filename: 'YelpCamp/emvdkjwtslqebuthvmdj'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    db.close();
})
