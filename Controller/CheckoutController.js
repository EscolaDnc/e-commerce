const { createOrder } = require('../models/CheckoutModel');

const checkout = async (req, res) => {
  try {
    const orderId = await createOrder(req.body);
    res.status(200).json({ message: 'Pedido realizado com sucesso', orderId });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar checkout.' });
  }
};

module.exports = { checkout };
