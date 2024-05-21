// Require the Express module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TourGuide =require('./models/TourModel');
const tourGuideRoutes = require('./routes/TourGuideRoutes');
const bookingRoute = require('./routes/BookingRoute');
const activityRoute = require('./routes/ActivityRoute');
const wishListRoute = require("./routes/WishListRoute")
const touristRoute = require("./routes/TouristRoute");
const eventRoute = require("./routes/EventRoute");
const tourRoute = require("./routes/TourRoutes");
const reviewRoute = require("./routes/ReviewRoute");
const paymentRoute = require('./routes/PaymentRoute');
const UserRoutes=require('./routes/UserRoutes');



// Create an instance of Express
const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const { type } = require('os');

mongoose.connect('mongodb+srv://ershad:ershad123@cluster0.hsnhi65.mongodb.net/ershad', {
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
//middleware
app.use(express.json());

// Mount the user routes
app.use('/api', UserRoutes);   //done
app.use('/api', tourGuideRoutes);  //done
app.use('/api',bookingRoute);  //done
app.use('/api',activityRoute);
app.use('/api',wishListRoute);
app.use('/api',touristRoute);   //done
app.use('/api',eventRoute);    //done
app.use('/api',tourRoute);      //done
app.use('/api',reviewRoute);   //done
app.use('/api',paymentRoute);





app.listen(3019, () => {
    console.log('Server is running on http://localhost:3019');
});
