// npm init | npm install express | npm install --save-dev nodemon
//bài 65 || #4:30 | npm install --save body-parser
//bài 82 || #0:30 | npm install --save ejs pug express-handlebars (tải 3 thư viện template engine)
//bài 88 || npm install --save express-handlebars@3.0
//bài 140 || download mySQL
//bài 141 || npm install --save mysql2 || Thư viện cho mySQL
//bài ... || Lỗi
//bài ... | Target ngày 23/1/2026
//bài 146 - 0:00

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