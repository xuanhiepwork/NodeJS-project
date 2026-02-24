//THƯ VIỆN & CONTROLLER
const path = require('path'); //xử lý đường dẫn

const express = require('express'); //tạo server
const bodyParser = require('body-parser'); //xử lý form data
// const expressHbs = require('express-handlebars');

const errorController = require('./controllers/error');
// const db = require('./util/database');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

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

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err)); //tạo user mặc định trong suốt quá trình chạy server
});

// ROUTES USE
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
    //.sync({ force: true }) // Chỉ bật cái này khi muốn xóa sạch bảng cũ làm lại
    .sync()
    .then(user => {
        return User.findByPk(1);
        // console.log(result);
        // app.listen(3000);
    })
    .then(user => {
        if (!user) {
            return User.create({ name: 'Max', email: 'test@test.com' });
        }
        // return Promise.resolve(user);
        return user;
    })
    .then(user => {
        //console.log(user); // Đã đảm bảo DB chạy xong mới bật server
        return user.createCart();
    })
    .then(cart => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err)
    });

// SERVER
// app.listen(3200); //ĐÃ CHUYỂN VÀO TRONG THEN BÊN TRÊN
