create table authority_test
    (
        id serial primary key,
        name varchar(20) not null,
        email varchar(20) not null,
        phone varchar(20) not null,
        dob date not null,
        designation varchar(30) not null,
        department varchar(30) not null,
        employee_id varchar(20) not null,
        district varchar(20) not null,
        office_add varchar(100),
        id_proff bytea not null,
        autho_letter bytea,
        offical_mail varchar(20) not null,
        password varchar(20) not null,
        unique(offical_mail)
        );