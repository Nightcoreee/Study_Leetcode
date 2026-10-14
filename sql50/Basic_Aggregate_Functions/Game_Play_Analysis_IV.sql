-- Table: Activity

-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | player_id    | int     |
-- | device_id    | int     |
-- | event_date   | date    |
-- | games_played | int     |
-- +--------------+---------+
-- (player_id, event_date) is the primary key (combination of columns with unique values) of this table.
-- This table shows the activity of players of some games.
-- Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.

-- Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places. In other words, you need to determine the number of players who logged in on the day immediately following their initial login, and divide it by the number of total players.

--Solution
SELECT ROUND(COUNT(a2.player_id) / COUNT(*), 2) fraction
FROM (
        SELECT player_id, MIN(event_date) first_login
        FROM Activity
        GROUP BY player_id
     ) a1
LEFT JOIN Activity a2 ON a1.player_id = a2.player_id and a2.event_date = DATE_ADD(a1.first_login, INTERVAL 1 DAY)