const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const courseSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        trim: true,
    },
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