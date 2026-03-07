/*
    Aqui está armazenado todos os creates das tabelas necessárias
    para o projeto
*/

CREATE TABLE orders (
    orderId VARCHAR PRIMARY KEY,
    value FLOAT,
    creationDate TIMESTAMP
)

CREATE TABLE items (
    orderId VARCHAR,
    productId INTEGER,
    quantity INTEGER,
    price FLOAT,
	PRIMARY KEY (orderId, productId), /* Adicionado para poder fazer a relação de edit dos items */
    FOREIGN KEY (orderId) REFERENCES orders(orderId)
)

/*
    Rode esse código abaixo para poder dar todos os previlégios para o usuário (se você utilizá-lo)
*/

CREATE USER order_api WITH PASSWORD '<senha>';
GRANT ALL PRIVILEGES ON DATABASE orders TO order_api;
GRANT ALL PRIVILEGES ON TABLE orders TO order_api;
GRANT ALL PRIVILEGES ON TABLE items TO order_api;

/*
    Debugs salvos para acessp rápido (ignorar)
*/

SELECT * FROM orders;
SELECT * FROM items;
