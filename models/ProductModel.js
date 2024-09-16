const pool = require('../config/database');

const getProducts = async () => {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
};

module.exports = { getProducts };
