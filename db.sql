--authority table
create table authority(
     employee_id VARCHAR PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    designation VARCHAR(100),
    department VARCHAR(100),
    district VARCHAR(100),
    office_address TEXT,
    id_proof TEXT,
    photo TEXT,
    password_hash TEXT NOT NULL,
    verified boolean default false
);

--user table
create table users(
    id serial primary key, 
    name varchar(50) not null, 
    email varchar(50) not null, 
    password text not null,
    phone varchar(10) not null, 
    blood_group varchar(10),
    is_donor boolean default false, 
    location text not null, 
    is_volunteer boolean default false,
    unique(email)
    );

-- volunteer table
create table volunteer(
    id serial primary key, 
    user_id serial,
    category varchar(20) not null, 
    certificate text not null, 
    is_approved boolean default false, 
    foreign key(user_id) references users(id));

    -- disaster 
    create table disaster(
        id serial primary key, 
        type varchar(50) not null, 
        location text not null, 
        date date not null, 
        photo text notnull, 
        is_verified boolean default false
        );