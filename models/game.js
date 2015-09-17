var mongoose = require('mongoose');
var gameSchema = require('../schemas/game');

var Game = mongoose.model('Game', gameSchema);

module.exports = Game;