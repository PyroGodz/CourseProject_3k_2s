use master;
go
drop database CarShowroomCP;
go

create database CarShowroomCP;
go
use CarShowroomCP;
go

drop table Comment;
drop table Publication;
drop table Car;
drop table Brand;
drop table CreationCountry;
drop table Chat;
drop table Client;
drop table ClientRole;

create table ClientRole (
	id int identity(1,1) primary key not null,
	content nvarchar(50) not null
);

create table Client (
	id int identity(1,1) primary key not null,
	Fio nvarchar(50) not null,
	phoneNumber nvarchar(50) not null,
	roleId int null,
	constraint FK_ClientRole_To_Client foreign key (roleId) references ClientRole(id)
);

create table Chat (
	id int identity(1,1) primary key not null,
	clientId int not null,
	content nvarchar(max) not null,
	creationDate datetime not null,
	constraint FK_Client_To_Comment foreign key (clientId) references Client(id)
);

create table CreationCountry (
	id int identity(1,1) primary key not null,
	countryName nvarchar(50) not null
);

create table Brand (
	id int identity(1,1) primary key not null,
	brandName nvarchar(50) not null
);

create table Car (
	id int identity(1,1) primary key not null,
	countryId int not null,
	brandId int not null,
	model nvarchar(50) not null,
	price decimal(9,2) not null,
	carDescription nvarchar(50) null,
	constraint FK_CreationCountry_To_Car foreign key (countryId) references CreationCountry(id),
	constraint FK_Brand_To_Car foreign key (brandId) references Brand(id),
);

create table Publication (
	id int identity(1,1) primary key not null,
	clientId int not null,
	carId int not null,
	purchaseDate date null,
	constraint FK_Client_To_Publication foreign key (clientId) references Client(id),
	constraint FK_Car_To_Publication foreign key (carId) references Car(id)
);

create table Comment (
	id int identity(1,1) primary key not null,
	publicationId int not null,
	content nvarchar(max) not null,
	creationDate datetime not null,
	constraint FK_Publication_To_Comment foreign key (publicationId) references Publication(id)
);

CREATE LOGIN pyrog
    WITH PASSWORD = '1111';
GO

-- Creates a database user for the login created above.
CREATE USER pyrog FOR LOGIN pyrog;
GO
grant create table, alter, select, insert, delete, update, execute, control, references to pyrog

select * from Publications
select * from cars
select * from users
delete from users where login = 'pyrog'
update users set role = 'ADMIN' where login = 'pyrog'
insert  users values ('pyrog', 'apap', 'user', '2022-05-22 16:57:54.0050000 +00:00', '2022-05-22 16:57:54.0050000 +00:00');