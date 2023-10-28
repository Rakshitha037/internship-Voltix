
const express = require('express');
const router = express.Router();
const s3Controller = require('../controller/awsController');
const multer = require('multer');
const upload = multer(); // No destination folder for in-memory storage

// Upload route
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { originalname, buffer } = req.file;
    const objectName = req.body.objectName || originalname;
    const result = await s3Controller.uploadFile(buffer, objectName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete route
router.delete('/delete/:objectName', async (req, res) => {
  try {
    const { objectName } = req.params;
    const result = await s3Controller.deleteFile(objectName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
