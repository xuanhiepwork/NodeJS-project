const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3200);

//bài 65 | #4:30 - npm install --save body-parser
//bài 80 | Target ngày 3/1/2026
//bài 74 - 0:00 | Coi lại chứ lỗi đoạn này | Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566314#overview

//Nhớ đánh giá điểm rèn luyện trên trường không là tạch đấy =))