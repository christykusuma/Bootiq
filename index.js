const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');

//Require in Models
require('./models/Brand');
require('./models/Category');
// require('./models/Subcategory');
require('./models/Product');
require('./models/User');
require('./models/Cart');

// Has to come after models
require('./services/passport');
require('./services/localpassport');
// DB SETUP:
mongoose.connect(keys.mongoURI);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

// parse application/json
app.use(bodyParser.json({type: '*/*'}));



require('./routes/localauthRoutes')(app);
require('./routes/authRoutes')(app);
require('./routes/categoryRoutes')(app);
// require('./routes/subcategoryRoutes')(app);
require('./routes/productRoutes')(app);
require('./routes/brandRoutes')(app);
require('./routes/cartRoutes')(app);

// For Heroku production
if (process.env.NODE_ENV === 'production') {
    // Express will serve production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
