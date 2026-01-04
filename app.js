const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHbs());
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3200);

//bài 65 || #4:30 | npm install --save body-parser
//bài 82 || #0:30 | npm install --save ejs pug express-handlebars (tải 3 thư viện template engine)
//bài 88 || npm install --save express-handlebars@3.0
//bài 96 | Target ngày 4/1/2026
//bài 85 - 0:00

//Nhớ đánh giá điểm rèn luyện trên trường không là tạch đấy =))