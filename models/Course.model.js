const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const courseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    }, 
    category: {
        type: String,
        trim: true
    },
    instructor: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('Course', courseSchema);