DROP IF EXIST DATABASE slenormand;

CREATE DATABASE slenormand;

USE slenormand;

DROP IF EXIST categorie;
DROP IF EXIST subcategorie;
DROP IF EXIST product;
DROP IF EXIST user;

CREATE TABLE user(
    id INT(2) UNSIGNED AUTO INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE categorie(
    id INT(2) UNSIGNED AUTO INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
);

CREATE TABLE subcategorie(
    id INT(2) UNSIGNED AUTO INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    categorie_parent INT(2) NOT NULL DEFAULT 0,
    image VARCHAR(255)
);

CREATE TABLE product(
    id INT(2) UNSIGNED AUTO INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subcategorie_parent INT(2) NOT NULL DEFAULT 0,
    price INT(10) NOT NULL DEFAULT 0,
    image VARCHAR(255)
);

INSERT INTO categorie (name, image) VALUES (
    ('Bébé', ''),
    ('Enfant', ''),
    ('10ans', ''),
    ('12 ans', ''),
    ('14 ans', ''),
    ('16 ans', ''),
    ('S', ''),
    ('M', ''),
    ('L', ''),
    ('XL', '')
);

INSERT INTO subcategorie (name, categorie_parent, image) VALUES (
    ('body', 1, ''),
    ('pyjama', 1, ''),
    ('chaussette', 1, ''),
    ('manteau', 1, ''),
    ('gilet', 1, ''),
    ('bonnet', 1, ''),
    ('sur-couche', 1, ''),
    ('moufle', 1, ''),
    ('parka', 1, ''),
    ('tshirt', 1, ''),
    ('body', 2, ''),
    ('pyjama', 2, ''),
    ('chaussette', 2, ''),
    ('manteau', 2, ''),
    ('gilet', 2, ''),
    ('bonnet', 2, ''),
    ('sur-couche', 2, ''),
    ('moufle', 2, ''),
    ('parka', 2, ''),
    ('tshirt', 2, ''),
    ('body', 3, ''),
    ('pyjama', 3, ''),
    ('chaussette', 3, ''),
    ('manteau', 3, ''),
    ('gilet', 3, ''),
    ('bonnet', 3, ''),
    ('sur-couche', 3, ''),
    ('moufle', 3, ''),
    ('parka', 3, ''),
    ('tshirt', 3, ''),
);

INSERT INTO product (name, subcategorie_parent, price, image) VALUES (
    ('body 1 mois', 1, 10, ''),
    ('body 3 mois', 1, 10, ''),
    ('body 6 mois', 1, 10, ''),
    ('body 9 mois', 1, 10, ''),
    ('body 12 mois', 1, 10, ''),
    ('body 15 mois', 1, 10, ''),
    ('body 18 mois', 1, 10, ''),
    ('body 2 ans', 1, 10, ''),
    ('body 3 ans', 1, 10, ''),
    ('body prématuré', 1, 10, ''),
);

INSERT INTO user (name, password) VALUES (
    ('TYPE', 'jesuisuntest'),
    ('IPT', ',fdsjkqblk'),
    ('TEST', 'fndsjhfjkdsqh'),
    ('Seb', 'jesuisuntest3'),
    ('SCR', 'jesuisuntesthfnjdsbgfhqdsf'),
)