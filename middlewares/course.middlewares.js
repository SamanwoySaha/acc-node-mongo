const Course = require('../models/Course.model');

module.exports.getCourses = async (req, res, next) => {
    const doc = await Course.findOne();
    res.status(200).json(doc);
}

module.exports.getCourseById = async (req, res, next) => {
    const doc = await Course.findOne({ id: req.params.id });
    res.status(200).json(doc);
}

module.exports.deleteCourse = async (req, res, next) => {
    const result = await Course.deleteOne({ id: req.params.id });
    if (result.deleteCount > 0) {
        res.status(200).json(result);
    } else {
        res.status(404).send('Something went wrong');
    }
}

module.exports.updateCourse = async (req, res, next) => {
    const doc = await Course.findOne({ id: req.params.id });
    const result = await Course.updateOne({ id: req.params.id }, req.body);
    if (result.nModified > 0) {
        res.status(200).json(doc);
    } else {
        res.status(404).send('Something went wrong');
    }
}
