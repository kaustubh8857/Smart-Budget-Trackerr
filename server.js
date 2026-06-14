const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('expenses.db');

db.run(`CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, amount REAL NOT NULL, category TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/expenses', (req, res) => {
  db.all('SELECT * FROM expenses ORDER BY created_at DESC', (err, rows) => {
    res.json(rows || []);
  });
});

app.post('/api/expenses', (req, res) => {
  const { title, amount, category } = req.body;
  if (!title || !amount || !category) return res.status(400).json({ error: 'Sab fields bharo!' });
  db.run('INSERT INTO expenses (title, amount, category) VALUES (?, ?, ?)', [title, amount, category], function(err) {
    res.json({ id: this.lastID, title, amount, category });
  });
});

app.delete('/api/expenses/:id', (req, res) => {
  db.run('DELETE FROM expenses WHERE id = ?', [req.params.id], () => {
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server chal raha hai port ' + PORT + ' pe!'));
