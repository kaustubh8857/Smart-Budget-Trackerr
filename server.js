const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://chaturvedikaustubh6_db_user:cLEqSsXVQ8VhT0pv@cluster0.ueu5b4r.mongodb.net/budgettracker?appName=Cluster0';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch((err) => console.error('MongoDB connection error:', err));

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', expenseSchema);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ created_at: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses.' });
  }
});

app.post('/api/expenses', async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    if (!title || !amount || !category) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const expense = new Expense({ title, amount, category });
    await expense.save();
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save expense.' });
  }
});

app.delete('/api/expenses/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete expense.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));