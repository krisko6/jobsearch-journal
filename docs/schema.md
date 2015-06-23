# Schema Information

## applications
column name | data type | details
------------|-----------|------------------------------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
company     | string    | not null
position    | string    | not null
status      | string    | not null
url         | string    | not null
notes       | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique


## interviews
column name | data type | details
------------|-----------|----------------------------------------------------
id          | integer   | not null, primary key
application_id | integer   | not null, foreign key (references applications)
datetime     | date     | not null
duration    | integer     | not null
address     | string    | not null

## offers
column name | data type | details
------------|-----------|------------------------------------------
id          | integer   | not null, primary key
application_id     | integer   | not null, foreign key (references applications)
vacation       | integer     |  
due_date    | date    | not null
salary      | integer    | not null
bonus         | integer    | 
notes       | text      |
