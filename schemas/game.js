var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    name: String,
    rootpath: String,
    main: String,
    poster: String,
    summary: String,
    hot: Number,
    relative: [Number],
    //insertTime:
});


gameSchema.statics.findNHotest = function(n, cb) {
    return this.find().sort({'hot': -1}).limit(n).exec(cb);
}

module.exports = gameSchema;