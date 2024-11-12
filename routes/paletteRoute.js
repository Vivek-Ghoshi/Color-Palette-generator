
const express = require('express');
const router = express.Router();
const Palette = require('../models/pelette');

// Create a new palette
router.post('/palettes', async (req, res) => {
  try {
    const { baseColor, colors } = req.body;
    const newPalette = new Palette({ baseColor, colors });
    await newPalette.save();
    res.json(newPalette);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all palettes

router.get('/palettes', async (req, res) => {
  try {
    const palettes = await Palette.find();
    res.json(palettes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
