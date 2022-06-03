create database std;

use std;

create table student(
    roll_no int primary key auto_increment,
    name varchar(40) NOT NULL,
    class varchar(40) NOT NULL,
    division varchar(8) NOT NULL,
    dateofbirth date NOT NULL,
    parent_mobile_no bigint NOT NULL
);