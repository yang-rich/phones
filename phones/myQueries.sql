create database smartphones;

\c smartphones;

create table phones( id SERIAL, name varchar(20), ostype varchar(25), brand varchar(15), price int, specs varchar(150));

insert into phones (name, ostype, brand, price, specs) values ('iPhone 11', 'iOS', 'Apple', 999, 'stuff');

insert into phones (name, ostype, brand, price, specs) values ('Pixel 5', 'Android', 'Google', 699, 'stuff');

insert into phones (name, ostype, brand, price, specs) values ('Galaxy S20', 'Android', 'Samasung', 999, 'stuff');

select * from phones;

ALTER TABLE phones ALTER COLUMN specs TYPE TEXT;

ALTER TABLE phones ADD image text;