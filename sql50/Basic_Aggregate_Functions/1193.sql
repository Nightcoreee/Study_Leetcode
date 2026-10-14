-- Problem: Monthly Transactions I

-- Table: Transactions

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | country       | varchar |
-- | state         | enum    |
-- | amount        | int     |
-- | trans_date    | date    |
-- +---------------+---------+
-- id is the primary key of this table.
-- The table has information about incoming transactions.
-- The state column is an enum of type ["approved", "declined"].
 

-- Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.

-- Return the result table in any order.

--Solution
SELECT DATE_FORMAT(trans_date, '%Y-%m') month, country, COUNT(*) trans_count, SUM(state = 'approved') approved_count, SUM(amount) trans_total_amount, SUM(amount * (state = 'approved')) approved_total_amount
FROM Transactions 
GROUP BY month, country