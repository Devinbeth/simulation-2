create table Properties (
    ID serial primary key,
    UserID integer not null references Users(ID),
    Name varchar(255),
    Description text,
    Address varchar(255),
    City varchar(255),
    State varchar(255),
    Zip varchar(255),
    Image text,
    LoanAmount decimal,
    MonthlyMortgage decimal,
    DesiredRent decimal
);

select * from Properties;
