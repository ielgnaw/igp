var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(require('less-middleware')(__dirname + '/public'));
app.use(express.static('bower_components'));
app.use(express.static('public'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SmallGame');
var db = mongoose.connection;
//bind写法是因为回调函数应该是一个函数，而直接console.error('xxx')是在调用这个函数
//了，所以用bind来把参数提前传递给console.error函数
db.on('error', console.error.bind(console, 'connection error:'));
var Game = require('./models/game');

app.get('/',function(req,res) {
    Game.findNHotest(4, function(err, games) {
        console.log('find 4 top games');
        if(err) return console.error(err);
        res.render('index', {title:'首页', 
                            pageIndex: 'nav-1',
                            message:'Hello Word!',
                            user:{
                                name:'叮叮'
                            },
                            gameLists:games
                        });
        //console.log(games);
    });
    
});

app.get('/games', function(req, res) {
    //if(err) return console.error(err);
    res.render('games', {
                            title:'浏览发布',
                            pageIndex: 'nav-2',
                            user:{
                                name:'叮叮'
                            },
                            hotgameLists:[
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                }
                            ],
                            newgameLists:[
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                },
                                {
                                    name:'小游戏1'
                                }
                            ]
                        });
});
var server = app.listen(3000, function() {
    console.log('app start at port 3000');
})