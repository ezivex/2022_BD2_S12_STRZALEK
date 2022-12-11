CREATE DATABASE perntodo;

-- CREATE TABLE public.autobusy
-- (
--     id_bus SERIAL PRIMARY KEY,
--     rejestracja VARCHAR(10) NOT NULL,
--     marka VARCHAR(50) NOT NULL,
--     sprawnosc boolean NOT NULL,
--     rodzaj_autobusy integer NOT NULL
-- );


CREATE TABLE IF NOT EXISTS public.autobusy
(
    id_bus integer[] NOT NULL,
    rejestracja character varying(10)[] COLLATE pg_catalog."default" NOT NULL,
    marka character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    sprawnosc boolean[] NOT NULL,
    rodzaj_autobusy integer[] NOT NULL,
    CONSTRAINT test_pkey PRIMARY KEY (id_bus)
);