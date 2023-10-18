const express = require('express');
const {authenticateToken} = require('../middleware/auth');
const userController = require('../controller/userController');
const projectController = require('../controller/projectController');
const serviceController = require('../controller/serviceController');
const testimonialController = require('../controller/testimonialController');
const feedController = require('../controller/feedController');


const router = express.Router();

router.post('/register', userController.createUser); // Use createUser, not registerUser
router.post('/login', userController.loginUser);
// Define routes for projects
router.get('/projects',projectController.getAllProjects);
router.post('/projects', authenticateToken, projectController.createProject);
// router.put('/projects/:id', authenticateToken,projectController.updateProject); 
// router.delete('/projects/:id',authenticateToken, projectController.deleteProject);

// Define routes for services
router.get('/services', serviceController.getAllServices);
router.post('/services', serviceController.createService);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);


// Define routes for testimonial
router.get('/testimonials', testimonialController.getAllTestimonials);
router.post('/testimonials', testimonialController.createTestimonial);
router.put('/testimonials/:id', testimonialController.updateTestimonial);
router.delete('/testimonials/:id',testimonialController.deleteTestimonial)

// Define routes for testimonial
router.get('/feeds', feedController.getAllFeeds);
router.post('/feeds', feedController.createFeed);
router.put('/feeds/:id', feedController.updateFeed);
router.delete('/feeds/:id',feedController.deleteFeed)


module.exports = router;