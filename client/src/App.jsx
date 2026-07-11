import { useEffect, useState } from 'react';
import StatsCard from './components/StatsCard';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import Modals from './components/Modals';
import { API } from './constants';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [modal, setModal] = useState({ active: false, type: '', title: '', message: '' });

  const showModal = (type, title, message) => {
    setModal({ active: true, type, title, message });
  };

  const closeModal = () => setModal((m) => ({ ...m, active: false }));

  const loadExpenses = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAdd = async ({ title, amount, category }, resetForm) => {
    if (!title) return showModal('error', 'Title Missing!', 'Please enter expense title.');
    if (!amount || amount <= 0)
      return showModal('error', 'Amount Missing!', 'Please enter a valid amount.');
    if (!category) return showModal('error', 'Category Missing!', 'Please select a category.');

    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, amount: parseFloat(amount), category })
    });

    resetForm();
    showModal('success', 'Success!', 'Expense added successfully!');
    loadExpenses();
  };

  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    showModal('success', 'Deleted!', 'Expense deleted successfully!');
    loadExpenses();
  };

  const sum = expenses.reduce((s, e) => s + e.amount, 0);
  const avg = expenses.length ? Math.round(sum / expenses.length) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-start to-bg-end px-5 py-[30px] font-poppins">
      <Modals modal={modal} onClose={closeModal} />

      <div className="mx-auto max-w-[650px]">
        <h1 className="mb-[10px] text-center text-[2rem] font-bold text-white">
          💰 Smart Budget Tracker
        </h1>
        <p className="mb-[30px] text-center text-[0.9rem] text-white/80">
          Track your daily expenses smartly
        </p>

        <StatsCard total={sum} count={expenses.length} avg={avg} />

        <ExpenseForm onAdd={handleAdd} />

        <ExpenseList expenses={expenses} onDelete={handleDelete} />

        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
}