const db = require('config');

db();

db.exec(
  `
    CREATE TABLE IF NOT EXISTS profile (
        id INT PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly-budget INT,
        days-per-week INT,
        hours-per-day INT,
        vacation-per-year INT,
        hour-price INT
    )

    `,
);

db.close();

