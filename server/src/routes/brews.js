const express = require('express');
const router = express.Router();
const Brew = require('../models/brew');

// CREATE
router.post('/', async (req, res) => {
    try {
        const { name, beanType, method, coffeeGrams, waterGrams, rating, notes } = req.body;
        if (!name || !beanType || !method || !coffeeGrams || !waterGrams || !rating) {
            return res.status(400).json({ error: 'All fields except notes are required.' });
        }
        const brew = await Brew.create({ name, beanType, method, coffeeGrams, waterGrams, rating, notes });
        res.status(201).json(brew);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ (with optional filter)
router.get('/', async (req, res) => {
    try {
        const { method } = req.query;
        const where = method ? { method } : {};
        const brews = await Brew.findAll({ where });
        res.json(brews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { name, beanType, method, coffeeGrams, waterGrams, rating, notes } = req.body;
        if (!name || !beanType || !method || !coffeeGrams || !waterGrams || !rating) {
            return res.status(400).json({ error: 'All fields except notes are required.' });
        }
        const [updated] = await Brew.update(
            { name, beanType, method, coffeeGrams, waterGrams, rating, notes },
            { where: { id: req.params.id } }
        );
        if (!updated) return res.status(404).json({ error: 'Brew not found.' });
        const updatedBrew = await Brew.findByPk(req.params.id);
        res.json(updatedBrew);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Brew.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Brew not found.' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;