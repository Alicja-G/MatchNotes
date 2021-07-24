import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("matchNotes.db");

export const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists matches (id integer primary key not null, active int, date text, hostTeam text, guestTeam text);"
    );
    tx.executeSql(
      "create table if not exists notes (id integer primary key not null, matchId integer not null, minute integer, content text, time text, active integer);"
    );
    tx.executeSql(
      "create table if not exists players (id integer primary key not null, matchId integer not null, number integer, name text);"
    );
  });
};

export const clearTables = () => {
  db.transaction((tx) => {
    tx.executeSql("drop table matches;");
    tx.executeSql("drop table notes;");
  });
};

export const addData = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "insert into matches (active, date, hostTeam, guestTeam ) values (1, ?, ? , ?)",
        ["20101202", "team1", "team2"]
      );
      tx.executeSql("select * from matches", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    null,
    null
  );
};

export const update = (id) => {
  db.transaction((tx) => {
    tx.executeSql(
      `select * from items where done = ?;`,
      [this.props.done ? 1 : 0],
      (_, { rows: { _array } }) => this.setState({ items: _array })
    );
  });
};

//active int, date text, hostTeam text, guestTeam text);"
