class BrewsController {
    constructor(BrewModel) {
        this.BrewModel = BrewModel;
    }

    async createBrew(req, res) {
        const { name, beanType, method, coffeeGrams, waterGrams, rating, notes } = req.body;
        if (!name || !beanType || !method || !coffeeGrams || !waterGrams || !rating) {
            return res.status(400).json({ message: 'All fields except notes are required.' });
        }
        try {
            const newBrew = await this.BrewModel.create({ name, beanType, method, coffeeGrams, waterGrams, rating, notes });
            res.status(201).json(newBrew);
        } catch (error) {
            res.status(500).json({ message: 'Error creating brew entry.', error });
        }
    }

    async getBrews(req, res) {
        try {
            const { method } = req.query;
            const where = method ? { method } : {};
            const brews = await this.BrewModel.findAll({ where });
            res.status(200).json(brews);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving brew entries.', error });
        }
    }

    async updateBrew(req, res) {
        const { id } = req.params;
        const { name, beanType, method, coffeeGrams, waterGrams, rating, notes } = req.body;
        if (!name || !beanType || !method || !coffeeGrams || !waterGrams || !rating) {
            return res.status(400).json({ message: 'All fields except notes are required.' });
        }
        try {
            const [updated] = await this.BrewModel.update(
                { name, beanType, method, coffeeGrams, waterGrams, rating, notes },
                { where: { id } }
            );
            if (!updated) {
                return res.status(404).json({ message: 'Brew entry not found.' });
            }
            const updatedBrew = await this.BrewModel.findByPk(id);
            res.status(200).json(updatedBrew);
        } catch (error) {
            res.status(500).json({ message: 'Error updating brew entry.', error });
        }
    }

    async deleteBrew(req, res) {
        const { id } = req.params;
        try {
            const deleted = await this.BrewModel.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: 'Brew entry not found.' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting brew entry.', error });
        }
    }
}

export default BrewsController;