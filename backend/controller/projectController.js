// controllers/projectController.js
const Project = require('../models/project');

const projectController = {
  getAllProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProject: async (req, res) => {
    const { name, description, start_date, end_date, team, status, image_url } = req.body;

    try {
      const newProject = new Project({ name, description, start_date, end_date, team, status, image_url });
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateProject: async (req, res) => {
    const { name, description, start_date, end_date, team, status, image_url } = req.body;

    try {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        { name, description, start_date, end_date, team, status, image_url },
        { new: true }
      );

      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }

      res.json(updatedProject);
    } catch (error) {
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