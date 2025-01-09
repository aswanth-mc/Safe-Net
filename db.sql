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
