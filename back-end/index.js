const express = require('express');
const path = require('path');
const { fetchData } = require('./apiCaller');
const { error } = require('console');

const app = express();

app.listen(8080,function(){
	console.log('listening on 8080')
});

const userTime = '2시간';
fetchData(userTime); 




app.get('/', function(req, res){
    res.send("하이하이");
    // const filePath = path.join(__dirname, '../front-end/mainchoose.html');
    // res.sendFile(filePath);
});
