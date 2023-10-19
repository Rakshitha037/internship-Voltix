// contactController.js

const Contact = require('../models/contact');

const contactController = {
  getAllContacts: async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createContact: async (req, res) => {
    const contactData = req.body;

    try {
      const newContact = new Contact(contactData);
      const savedContact = await newContact.save();
      res.status(201).json(savedContact);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateContact: async (req, res) => {
    const contactData = req.body;

    try {
      const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        contactData,
        { new: true }
      );

      if (!updatedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }

      res.json(updatedContact);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  
};

module.exports = contactController;
