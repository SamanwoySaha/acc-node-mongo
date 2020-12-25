const courseService = require('../services/course.service');

module.exports.create = async (req, res, next) => {
    try {
        const course = await courseService.create(req.body);
        return res.status(200).json(course);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}