const express = require("express");
const router = express.Router();

// const StudentController = require("../controllers/studentController");
const userController = require("../controller/userController");
// const { verifyToken } = require("../controllers/middleware");

// router.post("/create", verifyToken, StudentController.createStudent);

// User API
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);





const Project = require('../models/project');


// Create a new project
router.post('/projects', async (req, res) => {
    try {
      const newProject = await Project.create(req.body);
      res.json(newProject);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // Get a list of projects
router.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
