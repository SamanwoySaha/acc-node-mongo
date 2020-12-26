const Course = require('../models/Course.model');

module.exports.getCourses = async (req, res, next) => {
    const doc = await Course.find();
    res.status(200).json(doc);
}

module.exports.getCourseById = async (req, res, next) => {
    const doc = await Course.findOne({ _id: req.params.id });
    res.status(200).json(doc);
}

module.exports.deleteCourse = async (req, res, next) => {
    const result = await Course.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
        res.status(200).json('Course deleted successfully');
    } else {
        res.status(404).send('Something went wrong');
    }
}

module.exports.updateCourse = async (req, res, next) => {
    const result = await Course.updateOne({ _id: req.params.id }, req.body);
    if (result.nModified > 0) {
        res.status(200).json('Course updated successfully');
    } else {
        res.status(404).send('Something went wrong');
    }
}
