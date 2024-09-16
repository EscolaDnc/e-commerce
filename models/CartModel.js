const pool = require('../config/database');

const addToCart = async (cartItem) => {
  const { id_cliente, id_item, quantidade_item } = cartItem;
  await pool.query(
    'INSERT INTO cart (id_cliente, id_item, quantidade_item) VALUES ($1, $2, $3)',
    [id_cliente, id_item, quantidade_item]
  );
};

const getCart = async (id_cliente) => {
  const { rows } = await pool.query(
    'SELECT * FROM cart WHERE id_cliente = $1',
    [id_cliente]
  );
  return rows;
};

module.exports = { addToCart, getCart };
