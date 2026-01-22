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

// npm init | npm install express | npm install --save-dev nodemon
//bài 65 || #4:30 | npm install --save body-parser
//bài 82 || #0:30 | npm install --save ejs pug express-handlebars (tải 3 thư viện template engine)
//bài 88 || npm install --save express-handlebars@3.0
//bài 126 || Lỗi
//bài ... | Target ngày 18/1/2026
//bài 127 - 0:00
