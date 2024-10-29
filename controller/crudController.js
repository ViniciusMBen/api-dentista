const { Model } = require("sequelize");

exports.create = (Model) => async (req, res) => {
    try{
        const item = await Model.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAll = (Model) => async (req, res) => {
    try{
        const items = await Model.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = (Model) => async (req, res) => {
    try {
        const item = await Model.findByPk (req.params.id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: `${Model.name} não encontrado` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.update = (Model) => async (req, res) => {
    try {
        const item = await Model.findByPk(req.params.id);
        if (item) {
            await item.update(req.body);
            res.status(200).json(item);
        } else {
            res.status(400).json({ error: error.message });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.delete = (Model) => async (req, res) => {
    try {
        const item = await Model.findByPk(req.params.id);
        if (item) {
            await item.destroy();
            res.status(200).json({ message: `${Model.name} excluído com sucesso` });
        } else {
            res.status(404).json({ message: `${Model.name} não encontrado` });
        }
    } catch (erros) {
        res.status(500).json({ error: error.message });
    }
};
