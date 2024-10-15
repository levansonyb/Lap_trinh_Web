CREATE DATABASE sinhvien_db;

USE sinhvien_db;

CREATE TABLE sinhvien (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mssv VARCHAR(10) NOT NULL,
    hoten VARCHAR(100) NOT NULL
);
