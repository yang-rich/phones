create database smartphones;

\c smartphones

create table phones( id SERIAL, name varchar(20), ostype varchar(25), brand varchar(15), price int, specs varchar(150));

insert into phones (name, ostype, brand, price, specs) values ("iPhone 11", "iOS", "Apple", 999, "stuff");