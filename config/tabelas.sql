-- Tabela de produtos
CREATE TABLE products (
  id_item SERIAL PRIMARY KEY,
  nome_item VARCHAR(255),
  preco_item NUMERIC
);

-- Tabela de carrinho
CREATE TABLE cart (
  id_cliente INT,
  id_item INT,
  quantidade_item INT,
  PRIMARY KEY (id_cliente, id_item)
);

-- Tabela de pedidos
CREATE TABLE orders (
  id_pedido SERIAL PRIMARY KEY,
  id_cliente INT,
  endereco_cliente VARCHAR(255)
);

-- Tabela de itens de pedido
CREATE TABLE order_items (
  id_pedido INT,
  nome_item VARCHAR(255),
  id_item INT,
  quantidade_item INT,
  preco_item NUMERIC,
  PRIMARY KEY (id_pedido, id_item),
  FOREIGN KEY (id_pedido) REFERENCES orders(id_pedido)
);
