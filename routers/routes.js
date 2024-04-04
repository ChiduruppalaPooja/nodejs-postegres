const courseController = require('../controllers/courseController')

const express = require('express');
const router = express.Router();


router.post('/post-course', courseController.postCourses);
router.get('/get-courses', courseController.getCourses);
router.patch('/update-course/:id', courseController.updateCourses);
router.delete('/delete-course/:id', courseController.deleteCourse);

module.exports = router;