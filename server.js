const express = require('express'); //Importing express to help us to manage HTTP communication
const mongoose = require('mongoose'); // importing mongoose to help us to manage mongoDB
const courseRoutes = require('./routes/CourseRoute.js'); //importing our route, in this file we'll define out routes related to courses

const app = express(); //creating a new Express object
app.use(express.json());  // config Json as the pattern 

// adding the courseRouter to work with the express
app.use(courseRoutes);

//Creating a string connectio with mongoDB Atlas
let strConn = "mongodb+srv://tads:t31g03qK6rGDBSN7@cluster0-a1ypw.mongodb.net/test?retryWrites=true&w=majority" 
//Start the connection with Atlas mongoDB
mongoose.connect(strConn, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

// Initiating the server
app.listen(3000, () => { console.log('Server is running...') });