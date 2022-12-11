CREATE DATABASE perntodo;

CREATE TABLE public.autobusy
(
    id_bus SERIAL PRIMARY KEY,
    rejestracja VARCHAR(10) NOT NULL,
    marka VARCHAR(50) NOT NULL,
    sprawnosc boolean NOT NULL,
    rodzaj_autobusy integer NOT NULL
);

