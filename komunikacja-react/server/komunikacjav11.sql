--v11

BEGIN;


CREATE TABLE IF NOT EXISTS public.autobusy
(
    id_bus integer NOT NULL DEFAULT nextval('autobusy_id_bus_seq'::regclass),
    rejestracja character varying(10) COLLATE pg_catalog."default" NOT NULL,
    marka character varying(50) COLLATE pg_catalog."default" NOT NULL,
    sprawnosc boolean NOT NULL,
    rodzaj_autobusy integer NOT NULL,
    CONSTRAINT test_pkey PRIMARY KEY (id_bus)
);

CREATE TABLE IF NOT EXISTS public.dni_tygodnia
(
    id_dnityg integer NOT NULL DEFAULT nextval('dni_tygodnia_id_dnityg_seq'::regclass),
    dzien character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT dni_tygodnia_pkey PRIMARY KEY (id_dnityg)
);

CREATE TABLE IF NOT EXISTS public.dostepnosci_kierowcow
(
    id_dostkier integer NOT NULL DEFAULT nextval('dostepnosci_kierowcow_id_dostkier_seq'::regclass),
    id_uzytk integer NOT NULL,
    dzien_tyg integer NOT NULL,
    rodzaj_zmiany integer NOT NULL,
    CONSTRAINT dostkierowcy PRIMARY KEY (id_dostkier)
);

CREATE TABLE IF NOT EXISTS public.kurs
(
    id_kurs integer NOT NULL DEFAULT nextval('kurs_id_kurs_seq'::regclass),
    nazwalini_k integer NOT NULL,
    rbus_k integer NOT NULL,
    czas_odjazdu integer NOT NULL,
    CONSTRAINT kurs_pkey PRIMARY KEY (id_kurs)
);

CREATE TABLE IF NOT EXISTS public.kurs_realizacja
(
    id_realizacji integer NOT NULL DEFAULT nextval('kurs_realizacja_id_realizacji_seq'::regclass),
    id_kursu integer NOT NULL,
    dzien_rel integer NOT NULL,
    id_kierowcyrel integer NOT NULL,
    id_busurel integer NOT NULL,
    CONSTRAINT kurs_realizacja_pkey PRIMARY KEY (id_realizacji)
);

CREATE TABLE IF NOT EXISTS public.linia
(
    id_linii integer NOT NULL DEFAULT nextval('linia_id_linii_seq'::regclass),
    nazwalinii character varying(10) COLLATE pg_catalog."default" NOT NULL,
    typ_linii integer NOT NULL,
    CONSTRAINT linia_pkey PRIMARY KEY (id_linii)
);

CREATE TABLE IF NOT EXISTS public.przystanekwlinii
(
    id_przystlin integer NOT NULL DEFAULT nextval('przystanekwlinii_id_przystlin_seq'::regclass),
    linia integer NOT NULL,
    przystanek_id integer NOT NULL,
    CONSTRAINT przystanekwlinii_pkey PRIMARY KEY (id_przystlin)
);

CREATE TABLE IF NOT EXISTS public.przystanki
(
    id_przystanku integer NOT NULL DEFAULT nextval('przystanki_id_przystanku_seq'::regclass),
    nazwaprzystanku character varying(35) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_przystanku_pkey PRIMARY KEY (id_przystanku)
);

CREATE TABLE IF NOT EXISTS public.raport
(
    id_raport integer NOT NULL DEFAULT nextval('raport_id_raport_seq'::regclass),
    id_rozkl integer NOT NULL,
    godziny_real integer NOT NULL,
    CONSTRAINT raport_pkey PRIMARY KEY (id_raport)
);

CREATE TABLE IF NOT EXISTS public.rodzaj_autobusu
(
    id_rodzaj integer NOT NULL DEFAULT nextval('rodzaj_autobusu_id_rodzaj_seq'::regclass),
    nazwarodzaj character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT rodzaj_autobusu_pkey PRIMARY KEY (id_rodzaj)
);

CREATE TABLE IF NOT EXISTS public.rodzaj_zmiany
(
    id_zmiany integer NOT NULL DEFAULT nextval('rodzaj_zmiany_id_zmiany_seq'::regclass),
    nr_zmiany integer NOT NULL,
    g_rozp time with time zone NOT NULL,
    g_zakon time with time zone NOT NULL,
    CONSTRAINT rodzaj_zmiany_pkey PRIMARY KEY (id_zmiany)
);

CREATE TABLE IF NOT EXISTS public.rozklad_jazdy
(
    id_rj integer NOT NULL DEFAULT nextval('rozklad_jazdy_id_rj_seq'::regclass),
    nazwa_kursu_id integer NOT NULL,
    id_przystankiwlini integer NOT NULL,
    godzina_odjazdu integer NOT NULL,
    CONSTRAINT rozklad_jazdy_pkey PRIMARY KEY (id_rj)
);

CREATE TABLE IF NOT EXISTS public.typ_linii
(
    id_typ_linii integer NOT NULL DEFAULT nextval('typ_linii_id_typ_linii_seq'::regclass),
    nazwa_typu character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tryb_kutsowania_pkey PRIMARY KEY (id_typ_linii)
);

CREATE TABLE IF NOT EXISTS public.typ_stanowiska
(
    id_typstanowiska integer NOT NULL DEFAULT nextval('typ_stanowiska_id_typstanowiska_seq'::regclass),
    nazwa_stanowiska character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT typ_stanowiska_pkey PRIMARY KEY (id_typstanowiska)
);

CREATE TABLE IF NOT EXISTS public.uzytkownicy
(
    id_uzytkownik integer NOT NULL DEFAULT nextval('uzytkownicy_id_uzytkownik_seq'::regclass),
    imie character varying(30) COLLATE pg_catalog."default",
    nazwisko character varying(30) COLLATE pg_catalog."default",
    id_stanowisko integer NOT NULL,
    ulica character varying(30) COLLATE pg_catalog."default",
    miasto character varying(30) COLLATE pg_catalog."default",
    wiek integer,
    CONSTRAINT uzytkownicy_pkey PRIMARY KEY (id_uzytkownik)
);

ALTER TABLE IF EXISTS public.autobusy
    ADD CONSTRAINT rodzajautobusu_bus_fk FOREIGN KEY (rodzaj_autobusy)
    REFERENCES public.rodzaj_autobusu (id_rodzaj) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dostepnosci_kierowcow
    ADD CONSTRAINT dzientyg_fk FOREIGN KEY (dzien_tyg)
    REFERENCES public.dni_tygodnia (id_dnityg) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dostepnosci_kierowcow
    ADD CONSTRAINT iduzytk_fk FOREIGN KEY (id_uzytk)
    REFERENCES public.uzytkownicy (id_uzytkownik) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dostepnosci_kierowcow
    ADD CONSTRAINT rodzajzmiany_fk FOREIGN KEY (rodzaj_zmiany)
    REFERENCES public.rodzaj_zmiany (id_zmiany) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs
    ADD CONSTRAINT nazwaliniii_fk FOREIGN KEY (nazwalini_k)
    REFERENCES public.linia (id_linii) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs
    ADD CONSTRAINT rodzaj_bus_fk FOREIGN KEY (rbus_k)
    REFERENCES public.rodzaj_autobusu (id_rodzaj) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT bus_k_fk FOREIGN KEY (id_busurel)
    REFERENCES public.autobusy (id_bus) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT dzien_fk FOREIGN KEY (dzien_rel)
    REFERENCES public.dni_tygodnia (id_dnityg) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT kierowcy_fk FOREIGN KEY (id_kierowcyrel)
    REFERENCES public.dostepnosci_kierowcow (id_dostkier) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.kurs_realizacja
    ADD CONSTRAINT kurs_fk FOREIGN KEY (id_kursu)
    REFERENCES public.kurs (id_kurs) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.linia
    ADD CONSTRAINT typ_linii_fk FOREIGN KEY (typ_linii)
    REFERENCES public.typ_linii (id_typ_linii) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.przystanekwlinii
    ADD CONSTRAINT linia_fk FOREIGN KEY (linia)
    REFERENCES public.linia (id_linii) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.przystanekwlinii
    ADD CONSTRAINT przystanek_fk FOREIGN KEY (przystanek_id)
    REFERENCES public.przystanki (id_przystanku) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.raport
    ADD CONSTRAINT rozklad_fk FOREIGN KEY (id_rozkl)
    REFERENCES public.rozklad_jazdy (id_rj) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.rozklad_jazdy
    ADD CONSTRAINT kurs_fk FOREIGN KEY (nazwa_kursu_id)
    REFERENCES public.kurs (id_kurs) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.rozklad_jazdy
    ADD CONSTRAINT przystankiwlini_fk FOREIGN KEY (id_przystankiwlini)
    REFERENCES public.przystanekwlinii (id_przystlin) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.uzytkownicy
    ADD CONSTRAINT id_stanowisko_fk FOREIGN KEY (id_stanowisko)
    REFERENCES public.typ_stanowiska (id_typstanowiska) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;