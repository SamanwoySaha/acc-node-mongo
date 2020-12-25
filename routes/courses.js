const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const { getCourses, deleteCourse, updateCourse, getCourseById } = require('../middlewares/course.middlewares');

router.post('/', courseController.create);
router.get('/', getCourses);
router.get('/:id', getCourseById)
router.delete('/:id', deleteCourse);
router.put('/:id', updateCourse);

module.exports = router;
