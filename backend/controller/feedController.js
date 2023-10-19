// feedsController.js

const Feed = require('../models/feeds');

const feedsController = {
  getAllFeeds: async (req, res) => {
    try {
      const feeds = await Feed.find();
      res.json(feeds);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createFeed: async (req, res) => {
    const feedData = req.body;

    try {
      const newFeed = new Feed(feedData);
      const savedFeed = await newFeed.save();
      res.status(201).json(savedFeed);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateFeed: async (req, res) => {
    const feedData = req.body;

    try {
      const updatedFeed = await Feed.findByIdAndUpdate(
        req.params.id,
        feedData,
        { new: true }
      );

      if (!updatedFeed) {
        return res.status(404).json({ message: 'Feed not found' });
      }

      res.json(updatedFeed);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteFeed: async (req, res) => {
    try {
      const deletedFeed = await Feed.findByIdAndRemove(req.params.id);

      if (!deletedFeed) {
        return res.status(404).json({ message: 'Feed not found' });
      }

      res.json({ message: 'Feed deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = feedsController;
