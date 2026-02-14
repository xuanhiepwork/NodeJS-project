// npm init | npm install express | npm install --save-dev nodemon
//bài 65 || #4:30 | npm install --save body-parser
//bài 82 || #0:30 | npm install --save ejs pug express-handlebars (tải 3 thư viện template engine)
//bài 88 || npm install --save express-handlebars@3.0
//bài 140 || download mySQL
//bài 141 || npm install --save mysql2 || Thư viện cho mySQL
//bài 152 || npm install --save sequelize
//bài ... || Lỗi
//bài ... | Target ngày 23/1/2026
//bài 158 - 0:00

//dùng AI check xem git đã có những file nào thay đổi, dùng file đó update cho AI

```
Title: here
```

# Tạo mySQL server và run trên docker:
docker run -d -p 3306:3306 --name nodeserver -e MYSQL_ROOT_PASSWORD=password123 mysql:8.0
### Mật khẩu: 
password123
### Xóa container ở trên docker:
docker rm -f myNodeJSsql-server


# Xóa container:
docker rm -f nodeserver

# Useful resource:
## Learn more about MySQL/ SQL in General: https://www.w3schools.com/sql/
## Learn more about the Node MySQL Package: https://github.com/sidorares/node-mysql2

# Sequelize
Sequelize là một Node.js ORM (Object-Relational Mapping) giúp quản lý cơ sở dữ liệu SQL thông qua JavaScript. 4 khái niệm cốt lõi:

1. Models (Mô hình)
Model là trái tim của Sequelize. Nó đại diện cho một bảng (table) trong cơ sở dữ liệu.
Vai trò: Định nghĩa cấu trúc dữ liệu, kiểu dữ liệu của các cột và các ràng buộc (constraints).Ví dụ: User, Product, Order.
Ví dụ định nghĩa Model
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
});

2. Instances (Thực thể)
Instance đại diện cho một hàng (row) cụ thể trong bảng dữ liệu.
Vai trò: Là một đối tượng JavaScript chứa dữ liệu thực tế. Bạn có thể thay đổi dữ liệu trên instance này rồi lưu lại vào database.
Cách tạo: 
.build(): Khởi tạo instance trong bộ nhớ (chưa lưu vào DB).
.create(): Khởi tạo và lưu trực tiếp vào DB ngay lập tức.
// Tạo và lưu dữ liệu
const user = await User.create({ 
  username: 'Gemini', 
  birthday: new Date(2026, 1, 9) 
});

3. Queries (Truy vấn)
Queries là cách bạn thực hiện các thao tác CRUD (Create, Read, Update, Delete) mà không cần viết SQL thuần.
Vai trò: Sequelize sẽ tự động chuyển đổi các phương thức này thành câu lệnh SQL tương ứng.
Phương thức,Ý nghĩa (SQL tương ứng)
User.findAll(),SELECT * FROM Users;
User.findByPk(id),SELECT * FROM Users WHERE id = ?;
User.update({...}),UPDATE Users SET ... WHERE ...
User.destroy({...}),DELETE FROM Users WHERE ...

4. Associations (Liên kết)
Associations dùng để thiết lập mối quan hệ giữa các bảng (Foreign Keys).Vai trò: Cho phép bạn thực hiện các truy vấn liên kết (JOIN) một cách dễ dàng.
Các loại quan hệ: * hasOne (1-1)belongsTo (1-1)hasMany (1-n)belongsToMany (n-n)Thiết lập: Một User có nhiều Product
User.hasMany(Product);
Product.belongsTo(User);

### Luồng hoạt động tổng quan
Định nghĩa Model: Tạo ra cái "khuôn" cho dữ liệu.Thao tác dữ liệu: Dùng Model để truy vấn (Queries) hoặc tạo ra các bản ghi cụ thể (Instances).
Kết nối dữ liệu: Thiết lập các mối quan hệ (Associations) để quản lý logic phức tạp giữa các bảng.

## Note:
With Sequelize v5, findById() (which we'll use in this course) was replaced by findByPk().

You use it in the same way, so you can simply replace all occurrences of findById() with findByPk()

### Truy vấn tất cả người dùng và sản phẩm của họ
const users = await User.findAll({
  include: Product
});
console.log(JSON.stringify(users, null, 2));


# Làm việc với các nhánh trên git
## Tạo nhánh tên là database vừa tự động "nhảy" sang nhánh đó
```
git checkout -b database
```
## Tạo nhánh: git branch database 
## Chuyển nhánh: git checkout database
### Kiểm tra mình đang ở nhánh nào
```
git branch
```