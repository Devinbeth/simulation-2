create table Users (
    ID serial primary key,
    Username text not null,
    Password text not null
);

select * from Users;
