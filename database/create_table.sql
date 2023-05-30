create table users (
  login text not null unique,
  password text not null,
  id integer not null
);