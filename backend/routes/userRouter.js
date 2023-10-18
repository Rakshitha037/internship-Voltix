const express = require('express');
const userController = require('../controller/userController');
const projectController = require('../controller/projectController');
const serviceController = require('../controller/serviceController');
const testimonialController = require('../controller/testimonialController');

const router = express.Router();

router.post('/register', userController.createUser); // Use createUser, not registerUser
router.post('/login', userController.loginUser);
 
// Define routes for projects
router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);
router.put('/projects/:id', projectController.updateProject); 
router.delete('/projects/:id', projectController.deleteProject);

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

module.exports = router;