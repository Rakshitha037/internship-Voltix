const express = require('express');
const {authenticateToken} = require('../middleware/auth');

const userController = require('../controller/userController');
const projectController = require('../controller/projectController');
// const { getProjects,getProjectById, createProject, updateProject, deleteProject } = require('../controller/projectController');
const serviceController = require('../controller/serviceController');
const testimonialController = require('../controller/testimonialController');
const feedController = require('../controller/feedController');
const contactController = require('../controller/contactController');


const router = express.Router();

router.post('/register', userController.createUser); // Use createUser, not registerUser
router.post('/login', userController.loginUser);


// Define routes for projects

router.get('/projects',projectController.getAllProjects);
router.post('/projects', authenticateToken,projectController.createProject);
router.put('/projects/:id', authenticateToken,projectController.updateProject); 
router.delete('/projects/:id',authenticateToken,projectController.deleteProject);


// Define routes for services
router.get('/services', serviceController.getAllServices);
router.post('/services', authenticateToken,serviceController.createService);
router.put('/services/:id', authenticateToken,serviceController.updateService);
router.delete('/services/:id',authenticateToken, serviceController.deleteService);


// Define routes for testimonial
router.get('/testimonials', testimonialController.getAllTestimonials);
router.post('/testimonials', authenticateToken,testimonialController.createTestimonial);
router.put('/testimonials/:id', authenticateToken,testimonialController.updateTestimonial);
router.delete('/testimonials/:id',authenticateToken,testimonialController.deleteTestimonial)

// Define routes for feeds
router.get('/feeds', feedController.getAllFeeds);
router.post('/feeds',authenticateToken, feedController.createFeed);
router.put('/feeds/:id', authenticateToken,feedController.updateFeed);
router.delete('/feeds/:id',authenticateToken,feedController.deleteFeed)

// Define routes for contacts
router.get('/contacts', contactController.getAllContacts);
router.post('/contacts', authenticateToken,contactController.createContact);
router.put('/contacts/:id',authenticateToken, contactController.updateContact);



module.exports = router;