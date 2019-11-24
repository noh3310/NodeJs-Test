var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io')(http);

var MongoClient = require('mongodb').MongoClient;
var database;
function connectDB() {
  var url = "mongodb://<dbuser>:<dbpassword>@ds029787.mlab.com:29787/heroku_1d5zm8cr";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log('데이터베이스에 연결되었습니다. : ' + url);
    // database 변수에 할당
    database = db;
  });
}

// 로그인 요청
app.get('/Login', function (req, res) {
  var id = req.param("id");
  var pw = req.param('pw');
  var type = req.param('type');

  res.writeHead("200", {"Content-Type":"text/html;charset=utf8"});
	res.write("user id : " + id);
	res.write("<br>");
  res.write("userd pw : " + pw);
  res.write("<br>");
  res.write("userd type : " + type);
	res.end();
});


http.listen(9000, function () {
  connectDB();
  console.log('server listening on port 9000');
});