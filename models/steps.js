var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StepCount = new Schema({
    date: {
        type: Date
    },
    steps: {
        type: Number,
        default: 0
    },
    target: {
        type: Number,
        default: 2000
    },
    reward_earned: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Steps', StepCount);
