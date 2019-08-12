// ライブラリ読み込み
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var port = process.env.PORT || 1337; // port番号を指定


// GET http://localhost:3000/api/v1/
app.get('/api/v1/',function(req,res){
    res.json(jsonData = {
        "person_list": [
            {
                "name": "Omori",
                "state": "出勤"
            },
            {
                "name": "Tanizaki",
                "state": "休憩"
            },
            {
                "name": "Tanizaki",
                "state": "退勤"
            }
        ]
    });
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
