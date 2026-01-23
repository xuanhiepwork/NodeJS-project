//THƯ VIỆN & CONTROLLER
const path = require('path'); //xử lý đường dẫn

const express = require('express'); //tạo server
const bodyParser = require('body-parser'); //xử lý form data
// const expressHbs = require('express-handlebars');

const errorController = require('./controllers/error');


const app = express();

// TEMPLATE ENGINES SETUP
// app.engine(
//     'hbs',
//     expressHbs({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

// ROUTES
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES USE
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// SERVER
app.listen(3200);
