-- Table: Users

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | user_id     | int     |
-- | user_name   | varchar |
-- +-------------+---------+
-- user_id is the primary key (column with unique values) for this table.
-- Each row of this table contains the name and the id of a user.
 

-- Table: Register

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | contest_id  | int     |
-- | user_id     | int     |
-- +-------------+---------+
-- (contest_id, user_id) is the primary key (combination of columns with unique values) for this table.
-- Each row of this table contains the id of a user and the contest they registered into.
 
 --Solution
SELECT r.contest_id, ROUND(COUNT(u.user_id) / (SELECT COUNT(*) FROM Users) * 100, 2) percentage
FROM Users u
JOIN Register r ON u.user_id = r.user_id
GROUP BY r.contest_id
ORDER BY r.contest_id ASC, percentage DESC


--Order Solution
SELECT r.contest_id, ROUND(COUNT(r.user_id) / (SELECT COUNT(*) FROM Users) * 100, 2) percentage
FROM Register r
GROUP BY r.contest_id
ORDER BY r.contest_id ASC, percentage DESC