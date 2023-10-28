

const Project = require('../models/project');
const multerConfig = require('../middleware/multer');
const {generatePublicPresignedUrl} = require('../middleware/multer');

// Access the 's3' object
const s3 = multerConfig.s3;

const projectController = {
  getAllProjects: async (req, res) => {
    try {
      const projects = await Project.find({});
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProject: async (req, res) => {
    const projectData = req.body; // Assuming req.body is an object with all parameters

    try {
      const newProject = new Project(projectData);
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateProject: async (req, res) => {
    const projectData = req.body; // Assuming req.body is an object with all parameters
    console.log(projectData)
    console.log(req.params.id)
    try {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        projectData,
        { new: true }
      );

      console.log(updatedProject,'kjjj')

      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }

      res.json(updatedProject);
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error.message });
    }
  },

  deleteProject: async (req, res) => {
    try {
      const deletedProject = await Project.findByIdAndRemove(req.params.id);

      if (!deletedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }

      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = projectController;

