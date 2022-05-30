SELECT question,answer 
FROM objectives 
WHERE day_id = 21 ORDER BY sort;


SELECT objectives.question, days.title
FROM objectives
INNER JOIN days
ON days.id = objectives.day_id
WHERE objectives.day_id = 21;


SELECT id,question
FROM objectives 
WHERE day_id = 21
AND day_id = 22 
AND day_id = 23;

SELECT day_id,min(id)
FROM objectives
GROUP BY day_id ORDER BY day_id LIMIT 10;


SELECT day_id,count(id)
FROM objectives
WHERE id > 60
GROUP BY day_id 
HAVING count(id) < 5
ORDER BY day_id 
LIMIT 10;

UPDATE table
SET column1 = value1,
    column2 = value2 ,...
WHERE
	condition;
