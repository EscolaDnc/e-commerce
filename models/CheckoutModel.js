const pool = require('../config/database');

const createOrder = async (order) => {
  const { id_cliente, endereco_cliente, itens_pedido } = order;

  const orderResult = await pool.query(
    'INSERT INTO orders (id_cliente, endereco_cliente) VALUES ($1, $2) RETURNING id_pedido',
    [id_cliente, endereco_cliente]
  );

  const orderId = orderResult.rows[0].id_pedido;

  itens_pedido.forEach(async (item) => {
    await pool.query(
      'INSERT INTO order_items (id_pedido, nome_item, id_item, quantidade_item, preco_item) VALUES ($1, $2, $3, $4, $5)',
      [orderId, item.nome_item, item.id_item, item.quantidade_item, item.preco_item]
    );
  });

  return orderId;
};

module.exports = { createOrder };
