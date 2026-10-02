const  express = require('express');
const course_Routes = require('./routes/courseRoutes');
const app = express();
app.use(express.json());


app.use('/courses', course_Routes);


module.exports = app;