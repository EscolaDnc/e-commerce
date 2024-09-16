const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/ProductRoutes');
const cartRoutes = require('./routes/CartRoutes');
const checkoutRoutes = require('./routes/CheckoutRoutes');

const app = express();
app.use(bodyParser.json());

app.use(productRoutes);
app.use(cartRoutes);
app.use(checkoutRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
