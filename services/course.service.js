const Course = require('../models/Course.model');

module.exports.create = course => {
    return Course.create(course);
}