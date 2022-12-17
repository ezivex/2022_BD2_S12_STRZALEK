
-- v10 --
BEGIN;


CREATE TABLE IF NOT EXISTS public.linia
(
    id_linii serial NOT NULL,
    nazwaLinii character varying(10) COLLATE pg_catalog."default" NOT NULL,
    typ_linii integer NOT NULL,
    CONSTRAINT Linia_pkey PRIMARY KEY (id_linii)
);

CREATE TABLE IF NOT EXISTS public.autobusy
(
    id_bus serial NOT NULL,
    rejestracja character varying(10) COLLATE pg_catalog."default" NOT NULL,
    marka character varying(50) COLLATE pg_catalog."default" NOT NULL,
    sprawnosc boolean NOT NULL,
    rodzaj_autobusy integer NOT NULL,
    CONSTRAINT test_pkey PRIMARY KEY (id_bus)
);

CREATE TABLE IF NOT EXISTS public.dni_tygodnia
(
    id_dnityg serial NOT NULL,
    dzien character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT dni_tygodnia_pkey PRIMARY KEY (id_dnityg)
);

CREATE TABLE IF NOT EXISTS public.dostepnosci_kierowcow
(
    id_dostKier serial NOT NULL,
    id_uzytk integer NOT NULL,
    dzien_tyg integer NOT NULL,
    rodzaj_zmiany integer NOT NULL,
    CONSTRAINT dostKierowcy PRIMARY KEY (id_dostKier)
);

CREATE TABLE IF NOT EXISTS public.kurs
(
    id_kurs serial NOT NULL,
    nazwaLini_k integer NOT NULL,
    rbus_k integer NOT NULL,
    czas_odjazdu integer NOT NULL,
    CONSTRAINT kurs_pkey PRIMARY KEY (id_kurs)
);

CREATE TABLE IF NOT EXISTS public.kurs_realizacja
(
    id_realizacji serial NOT NULL,
    id_kursu integer NOT NULL,
    dzien_rel integer NOT NULL,
    id_kierowcyRel integer NOT NULL,
    id_busuRel integer NOT NULL,
    CONSTRAINT kurs_realizacja_pkey PRIMARY KEY (id_realizacji)
);

CREATE TABLE IF NOT EXISTS public.przystanekwLinii
(
    id_przystLin serial NOT NULL,
    linia integer NOT NULL,
    przystanek_id integer NOT NULL,
    CONSTRAINT przystanekwLinii_pkey PRIMARY KEY (id_przystLin)
);

CREATE TABLE IF NOT EXISTS public.przystanki
(
    id_przystanku serial NOT NULL,
    nazwaprzystanku character varying(35) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_przystanku_pkey PRIMARY KEY (id_przystanku)
);

CREATE TABLE IF NOT EXISTS public.raport
(
    id_raport serial NOT NULL,
    id_rozkl integer NOT NULL,
    godziny_real integer NOT NULL,
    CONSTRAINT raport_pkey PRIMARY KEY (id_raport)
);

CREATE TABLE IF NOT EXISTS public.rodzaj_autobusu
(
    id_rodzaj serial NOT NULL,
    nazwaRodzaj character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT rodzaj_autobusu_pkey PRIMARY KEY (id_rodzaj)
);

CREATE TABLE IF NOT EXISTS public.rodzaj_zmiany
(
    id_zmiany serial NOT NULL,
    nr_zmiany integer NOT NULL,
    g_rozp time with time zone NOT NULL,
    g_zakon time with time zone NOT NULL,
    CONSTRAINT rodzaj_zmiany_pkey PRIMARY KEY (id_zmiany)
);

CREATE TABLE IF NOT EXISTS public.rozklad_jazdy
(
    id_rj serial NOT NULL,
    nazwa_kursu_id integer NOT NULL,
    id_przystankiwlini integer NOT NULL,
    godzina_odjazdu integer NOT NULL,
    CONSTRAINT rozklad_jazdy_pkey PRIMARY KEY (id_rj)
);

CREATE TABLE IF NOT EXISTS public.typ_linii
(
    id_typ_linii serial NOT NULL,
    nazwa_typu character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tryb_kutsowania_pkey PRIMARY KEY (id_typ_linii)
);

CREATE TABLE IF NOT EXISTS public.typ_stanowiska
(
    id_typStanowiska serial NOT NULL,
    nazwa_stanowiska character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT typ_stanowiska_pkey PRIMARY KEY (id_typStanowiska)
);

CREATE TABLE IF NOT EXISTS public.uzytkownicy
(
    id_uzytkownik serial NOT NULL,
    imie character varying(30) COLLATE pg_catalog."default",
    nazwisko character varying(30) COLLATE pg_catalog."default",
    id_stanowisko integer NOT NULL,
    ulica char,
    miasto char,
    wiek integer,
    CONSTRAINT uzytkownicy_pkey PRIMARY KEY (id_uzytkownik)
);

ALTER TABLE IF EXISTS public.linia
    ADD CONSTRAINT typ_linii_FK FOREIGN KEY (typ_linii)
    REFERENCES public.Typ_linii (id_typ_linii) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.autobusy
    ADD CONSTRAINT rodzajautobusu_bus_FK FOREIGN KEY (rodzaj_autobusy)
    REFERENCES public.rodzaj_autobusu (id_rodzaj) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dostepnosci_kierowcow
    ADD CONSTRAINT dzienTyg_FK FOREIGN KEY (dzien_tyg)
    REFERENCES public.dni_tygodnia (id_dnityg) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dostepnosci_kierowcow
    ADD CONSTRAINT idUzytk_FK FOREIGN KEY (id_uzytk)
    REFERENCES public.uzytkownicy (id_uzytkownik) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dostepnosci_kierowcow
    ADD CONSTRAINT rodzajZmiany_FK FOREIGN KEY (rodzaj_zmiany)
    REFERENCES public.rodzaj_zmiany (id_zmiany) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs
    ADD CONSTRAINT nazwaLiniii_FK FOREIGN KEY (nazwaLini_k)
    REFERENCES public.Linia (id_linii) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs
    ADD CONSTRAINT rodzaj_bus_FK FOREIGN KEY (rbus_k)
    REFERENCES public.rodzaj_autobusu (id_rodzaj) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT bus_k_FK FOREIGN KEY (id_busuRel)
    REFERENCES public.autobusy (id_bus) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT dzien_FK FOREIGN KEY (dzien_rel)
    REFERENCES public.dni_tygodnia (id_dnityg) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT kierowcy_FK FOREIGN KEY (id_kierowcyRel)
    REFERENCES public.dostepnosci_kierowcow (id_dostKier) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT kurs_FK FOREIGN KEY (id_kursu)
    REFERENCES public.kurs (id_kurs) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.przystanekwLinii
    ADD CONSTRAINT linia_FK FOREIGN KEY (linia)
    REFERENCES public.linia (id_linii) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.przystanekwLinii
    ADD CONSTRAINT przystanek_FK FOREIGN KEY (przystanek_id)
    REFERENCES public.przystanki (id_przystanku) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.raport
    ADD CONSTRAINT rozklad_FK FOREIGN KEY (id_rozkl)
    REFERENCES public.rozklad_jazdy (id_rj) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.rozklad_jazdy
    ADD CONSTRAINT kurs_FK FOREIGN KEY (nazwa_kursu_id)
    REFERENCES public.kurs (id_kurs) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.rozklad_jazdy
    ADD CONSTRAINT przystankiwlini_FK FOREIGN KEY (id_przystankiwlini)
    REFERENCES public.przystanekwLinii (id_przystLin) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.uzytkownicy
    ADD CONSTRAINT id_stanowisko_FK FOREIGN KEY (id_stanowisko)
    REFERENCES public.typ_stanowiska (id_typStanowiska) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;