//server.js
var http = require('http'); //httpモジュールのインポート
var server = http.createServer();
//settings.js
const port = 1337;
const host = '127.0.0.1';
var jsonData = {
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
}
server.on('request', function(req, res) {

  res.writeHead(200, {'Content-Type': 'json'});
  res.write(jsonData);
  res.end();
})
server.listen(port,host)
