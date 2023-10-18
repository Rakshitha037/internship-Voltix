// controllers/serviceController.js
const Service = require('../models/service');

const serviceController = {
  getAllServices: async (req, res) => {
    try {
      const services = await Service.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createService: async (req, res) => {
    const { name, description, image_url } = req.body;

    try {
      const newService = new Service({ name, description, image_url });
      const savedService = await newService.save();
      res.status(201).json(savedService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateService: async (req, res) => {
    const { name, description, image_url } = req.body;

    try {
      const updatedService = await Service.findByIdAndUpdate(
        req.params.id,
        { name, description, image_url },
        { new: true }
      );

      if (!updatedService) {
        return res.status(404).json({ message: 'Service not found' });
      }

      res.json(updatedService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteService: async (req, res) => {
    try {
      const deletedService = await Service.findByIdAndRemove(req.params.id);

      if (!deletedService) {
        return res.status(404).json({ message: 'Service not found' });
      }

      res.json({ message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = serviceController;