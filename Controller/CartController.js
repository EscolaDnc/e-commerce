const { addToCart, getCart } = require('../models/CartModel');

const addItemToCart = async (req, res) => {
  try {
    await addToCart(req.body);
    res.status(200).json({ message: 'Item adicionado ao carrinho.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar item ao carrinho.' });
  }
};

const viewCart = async (req, res) => {
  try {
    const cart = await getCart(req.params.id_cliente);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao visualizar carrinho.' });
  }
};

module.exports = { addItemToCart, viewCart };
