// testimonialsController.js

const Testimonial = require('../models/testimonial');

const testimonialsController = {
  getAllTestimonials: async (req, res) => {
    try {
      const testimonials = await Testimonial.find();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createTestimonial: async (req, res) => {
    const testimonialData = req.body;

    try {
      const newTestimonial = new Testimonial(testimonialData);
      const savedTestimonial = await newTestimonial.save();
      res.status(201).json(savedTestimonial);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateTestimonial: async (req, res) => {
    const testimonialData = req.body;

    try {
      const updatedTestimonial = await Testimonial.findByIdAndUpdate(
        req.params.id,
        testimonialData,
        { new: true }
      );

      if (!updatedTestimonial) {
        return res.status(404).json({ message: 'Testimonial not found' });
      }

      res.json(updatedTestimonial);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteTestimonial: async (req, res) => {
    try {
      const deletedTestimonial = await Testimonial.findByIdAndRemove(req.params.id);

      if (!deletedTestimonial) {
        return res.status(404).json({ message: 'Testimonial not found' });
      }

      res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = testimonialsController;
