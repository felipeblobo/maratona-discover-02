const Database = require('./config');

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(
      `CREATE TABLE profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        days_per_week INT,
        hours_per_day INT,
        vacation_per_year INT,
        hour_price INT
    )`);

    await db.exec(`CREATE TABLE jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        daily_hours INT,
        total_hours INT,
        created_at DATETIME
        )`);

    await db.run(
      `INSERT INTO profile(
        name,
        avatar,
        monthly_budget,
        days_per_week,
        hours_per_day,
        vacation_per_year,
        hour_price
        ) VALUES (
        "Felipe",
        "https://avatars.githubusercontent.com/u/69439442?s=400&u=60eef3d20a9252062651358f05a66ed6e73e2876&v=4",
        3000,
        5,
        5,
        4,
        75
);`
    );

    await db.run(
      `INSERT INTO jobs (
        name,
        daily_hours,
        total_hours,
        created_at
    ) VALUES (
        "Black Code",
        4,
        80,
        1617514376018
    )`);

    await db.run(
      `INSERT INTO jobs (
        name,
        daily_hours,
        total_hours,
        created_at
    ) VALUES (
        "Mercadinho do Zé",
        2,
        15,
        1617514376018
    )`);

    await db.close();
  },
};

initDb.init();
