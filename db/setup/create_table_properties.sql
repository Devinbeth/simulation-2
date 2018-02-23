create table Properties (
    ID serial primary key,
    UserID integer not null references Users(ID),
    Name text,
    Description text,
    Address text,
    City text,
    State text,
    Zip text,
    Image text,
    LoanAmount decimal,
    MonthlyMortgage decimal,
    DesiredRent decimal
);

select * from Properties;
