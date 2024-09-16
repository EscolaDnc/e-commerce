const { getProducts } = require('../models/ProductModel');

const listProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar produtos.' });
  }
};

module.exports = { listProducts };
