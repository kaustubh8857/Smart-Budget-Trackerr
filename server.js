const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const db = new Database('expenses.db');

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    amount REAL NOT NULL,
    category TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET all expenses
app.get('/api/expenses', (req, res) => {
  const expenses = db.prepare('SELECT * FROM expenses ORDER BY created_at DESC').all();
  res.json(expenses);
});

// POST new expense
app.post('/api/expenses', (req, res) => {
  const { title, amount, category } = req.body;
  if (!title || !amount || !category) {
    return res.status(400).json({ error: 'Sab fields bharo!' });
  }
  const result = db.prepare('INSERT INTO expenses (title, amount, category) VALUES (?, ?, ?)').run(title, amount, category);
  res.json({ id: result.lastInsertRowid, title, amount, category });
});

// DELETE expense
app.delete('/api/expenses/:id', (req, res) => {
  db.prepare('DELETE FROM expenses WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe!`);
});
