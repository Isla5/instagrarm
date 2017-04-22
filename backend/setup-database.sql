PRAGMA foreign_keys = ON;

CREATE TABLE account (
    id INTEGER PRIMARY KEY autoincrement,
    email TEXT NOT NULL,
    -- Holds a bcrypted hash
    hashed_password TEXT NOT NULL
);

CREATE TABLE imgs (
    id TEXT NOT NULL,
    all_day INT NOT NULL,
    description TEXT NOT NULL,
    creator INTEGER NOT NULL,
    url TEXT NOT NULL,
    FOREIGN KEY (creator) REFERENCES account(ID),
    UNIQUE (id)
);
