// salaprove.js
const express = require('express');
const router = express.Router();
const SalaProve = require('../models/salaProve');

// GET: Ottieni tutte le sale prove
router.get('/saleprove', async (req, res) => {
  try {
    const saleprove = await SalaProve.find();
    res.json(saleprove);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// POST: Crea una nuova sala prove
router.post('/saleprove/create', async (req, res) => {
  const salaProva = new SalaProve({
    title: req.body.title,
    image: req.body.image,
    price: req.body.price
  });

  try {
    const savedSalaProva = await salaProva.save();
    res.json(savedSalaProva);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Altre route per PATCH, DELETE, ecc.

module.exports = router;
