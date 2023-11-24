const express = require('express');
const path = require('path');
const { callOpenAI } = require('./apiCaller');
const { error } = require('console');

const app = express();

app.listen(8080,function(){
	console.log('listening on 8080')
});

app.get('/', function(req, res){
    res.send("하이하이");
    // const filePath = path.join(__dirname, '../front-end/mainchoose.html');
    // res.sendFile(filePath);
});

function recommandTask(time)
{

    return callOpenAI()
        .then((response) => {
            const recommandation = response.data.choices[0].text;
            console.log(`남는 ${time} 동안`, recommandation, "을 추천드려요");
        })

        .catch((error) => {
            console.log('error: ', error);
        });
}

const userTime = '2시간';
recommandTask(userTime); 