import pool from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query(
    "SELECT *, TO_CHAR(added, 'Month DDth YYYY') AS added FROM messages"
  );
  return rows;
};

const getMessage = async (id) => {
  const { rows } = await pool.query(
    "SELECT *, TO_CHAR(added, 'Month DDth YYYY') AS added FROM messages WHERE id = $1",
    [id]
  );
  return rows[0];
};

const insertMessage = async (author, text) => {
  await pool.query("INSERT INTO messages (author, text) VALUES ($1, $2)", [
    author,
    text,
  ]);
};

const deleteAllMessages = async () => {
  await pool.query("DELETE FROM messages");
};

export { getMessage, getAllMessages, insertMessage, deleteAllMessages };
