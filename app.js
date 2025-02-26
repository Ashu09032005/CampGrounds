const express = require('express');
const app = express();
const path = require('path');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const Review = require('./models/review');
const Campground = require('./models/campground');
const session = require('express-session');
const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');
const flash = require('connect-flash');
const { campgroundSchema, reviewSchema } = require('./schemas.js')
const ejsMate = require('ejs-mate');//render ejs files
app.engine('ejs', ejsMate);
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, 'public')))
const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
mongoose.connect('mongodb://localhost:27017/yelp-camp');


const db = mongoose.connection;
//Connection error
db.on("error", console.error.bind(console, "connection error:"));
//Successful connection
db.once("open", () => {
    console.log("Database connected");
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);
app.get('/', (req, res) => {
    res.render('home');
}
);







app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
})
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//POST/campgrounds/:id/reviews