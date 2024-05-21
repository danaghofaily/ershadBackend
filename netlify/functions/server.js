const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoUri = 'mongodb+srv://muzammilbeconite:Bd6RCUx99jopn0ru@cluster0.7vzgufg.mongodb.net/User'; // Ensure this is set in your Netlify environment variables
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const tourGuideRoutes = require('../../routes/TourGuideRoutes');
const bookingRoute = require('../../routes/BookingRoute');
const activityRoute = require('../../routes/ActivityRoute');
const wishListRoute = require("../../routes/WishListRoute")
const touristRoute = require("../../routes/TouristRoute");
const eventRoute = require("../../routes/EventRoute");
const tourRoute = require("../../routes/TourRoutes");
const reviewRoute = require("../../routes/ReviewRoute");
const paymentRoute = require('../../routes/PaymentRoute');
const UserRoutes=require('../../routes/UserRoutes');

app.use('/.netlify/functions/server/users', UserRoutes);
app.use('/.netlify/functions/server/tour-guide', tourGuideRoutes);
app.use('/.netlify/functions/server/booking', bookingRoute);
app.use('/.netlify/functions/server/activity', activityRoute);
app.use('/.netlify/functions/server/wishlist', wishListRoute);
app.use('/.netlify/functions/server/tourist', touristRoute);
app.use('/.netlify/functions/server/event', eventRoute);
app.use('/.netlify/functions/server/tour', tourRoute);
app.use('/.netlify/functions/server/review', reviewRoute);
app.use('/.netlify/functions/server/payment', paymentRoute);

module.exports.handler = serverless(app);