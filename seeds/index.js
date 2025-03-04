const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelper');
const Campground = require('../models/campground');
mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
//gives random element from array
const sample = (array) => array[Math.floor(Math.random() * array.length)];
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        console.log("check")
        const camp = new Campground({
            author: '67c143a9a2f7e42117ebec9c',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,//city array passed
            title: `${sample(descriptors)} ${sample(places)}`,//desc n places array is passed


            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            price: Math.floor(Math.random() * 20) + 10,
            images: [
                {
                    url: 'https://res.cloudinary.com/dhhyqzxnr/image/upload/v1741066913/YelpCamp/hwvq5kxwi6s5mnz0hyih.jpg',
                    filename: 'YelpCamp/hwvq5kxwi6s5mnz0hyih',

                },
                {
                    url: 'https://res.cloudinary.com/dhhyqzxnr/image/upload/v1741066913/YelpCamp/rms2hogxc7yh3kg2yi8f.jpg',
                    filename: 'YelpCamp/rms2hogxc7yh3kg2yi8f',

                }
            ]

        })
        console.log("Saving campground:", camp);
        await camp.save();

    }
}
//close connection
seedDB().then(() => {
    mongoose.connection.close();
})