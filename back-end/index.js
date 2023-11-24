const express = require('express');
const path = require('path');
const { fetchData } = require('./apiCaller');
const { error } = require('console');

const app = express();

app.listen(8080,function(){
	console.log('listening on 8080')
});

// main 페이지
app.post('/main', function(req, res){
    res.send();
});

// 회원가입 page
app.get('/sign', function(req, res){
});

// 로그인 page
app.get('/login', function(req, res){
});

const userTime = '2시간';
fetchData(userTime); 
